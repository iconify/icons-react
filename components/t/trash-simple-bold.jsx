import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zddt3ibfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zddt3ibfx"/>`,
		"fallback": "iconamoon:trash-simple-bold",
	});
}

export default Component;
