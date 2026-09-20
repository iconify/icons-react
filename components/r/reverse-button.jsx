import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/levtbqbbg.css';
import '../../css/c/c_o0h-edl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="levtbqbbg"/><path class="c_o0h-edl"/>`,
		"fallback": "openmoji:reverse-button",
	});
}

export default Component;
