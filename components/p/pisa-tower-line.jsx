import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvd1gsics.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvd1gsics"/>`,
		"fallback": "mingcute:pisa-tower-line",
	});
}

export default Component;
