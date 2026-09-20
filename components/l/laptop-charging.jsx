import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zknnki1nl.css';
import '../../css/n/n3kx5ciqj.css';
import '../../css/d/d146v5ukl.css';
import '../../css/g/gmwy4vbxs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zknnki1nl"/><path class="n3kx5ciqj"/><path class="d146v5ukl"/><path class="gmwy4vbxs"/></g>`,
		"fallback": "streamline-color:laptop-charging",
	});
}

export default Component;
