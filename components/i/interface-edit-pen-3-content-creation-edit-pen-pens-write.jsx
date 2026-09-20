import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q-7nu1r7x.css';
import '../../css/m/m2kca79uk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q-7nu1r7x"/><path class="m2kca79uk"/></g>`,
		"fallback": "streamline:interface-edit-pen-3-content-creation-edit-pen-pens-write",
	});
}

export default Component;
