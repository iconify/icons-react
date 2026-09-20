import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yd0ljdv-v.css';
import '../../css/r/rf-t6y6_d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yd0ljdv-v"/><path class="rf-t6y6_d"/></g>`,
		"fallback": "streamline:interface-edit-pen-2-content-creation-edit-fountain-pen-write",
	});
}

export default Component;
