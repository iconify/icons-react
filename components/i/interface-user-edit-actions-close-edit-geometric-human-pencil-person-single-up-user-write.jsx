import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gdjy5jlqy.css';
import '../../css/i/i8db6ebhf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="gdjy5jlqy"/><path class="i8db6ebhf"/></g>`,
		"fallback": "streamline:interface-user-edit-actions-close-edit-geometric-human-pencil-person-single-up-user-write",
	});
}

export default Component;
