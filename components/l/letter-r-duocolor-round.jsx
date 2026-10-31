import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj8wxne4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj8wxne4a"/>`,
		"fallback": "coolicons:letter-r-duocolor-round",
	});
}

export default Component;
