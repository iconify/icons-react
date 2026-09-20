import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f05nhwbzo.css';
import '../../css/n/n34614rmn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="f05nhwbzo"/><path class="n34614rmn"/></g>`,
		"fallback": "streamline:interface-edit-pen-1-content-creation-edit-pen-write",
	});
}

export default Component;
