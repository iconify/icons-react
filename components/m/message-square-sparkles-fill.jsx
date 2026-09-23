import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ej-9rrbto.css';
import '../../css/z/zcy0gdokj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ej-9rrbto"/><path class="zcy0gdokj"/></g>`,
		"fallback": "keyline-icons:message-square-sparkles-fill",
	});
}

export default Component;
