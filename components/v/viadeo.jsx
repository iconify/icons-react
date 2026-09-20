import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqjn98bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqjn98bpl"/>`,
		"fallback": "thesvg-color:viadeo",
	});
}

export default Component;
