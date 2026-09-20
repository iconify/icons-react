import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-gm21tca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-gm21tca"/>`,
		"fallback": "mingcute:walk-line",
	});
}

export default Component;
