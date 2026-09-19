import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tlev-2ucd.css';
import '../../css/e/e4akmnboo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tlev-2ucd"/><path class="e4akmnboo"/></g>`,
		"fallback": "fluent-emoji-flat:sign-of-the-horns-light",
	});
}

export default Component;
