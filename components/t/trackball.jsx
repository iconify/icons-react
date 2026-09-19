import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls74uostr.css';
import '../../css/a/axngztbwa.css';
import '../../css/q/qk0sq3q3j.css';
import '../../css/i/irtxrpidt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ls74uostr"/><path class="axngztbwa"/><path class="qk0sq3q3j"/><path class="irtxrpidt"/></g>`,
		"fallback": "fluent-emoji-flat:trackball",
	});
}

export default Component;
