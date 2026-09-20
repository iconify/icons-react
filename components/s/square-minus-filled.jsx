import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbnu5ip9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbnu5ip9p"/>`,
		"fallback": "reicon:square-minus-filled",
	});
}

export default Component;
