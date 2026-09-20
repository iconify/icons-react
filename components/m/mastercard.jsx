import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzm141dva.css';
import '../../css/d/d-spf-bpy.css';
import '../../css/n/ndr05hb8m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzm141dva"/><path class="d-spf-bpy"/><path class="ndr05hb8m"/>`,
		"fallback": "selfhst:mastercard",
	});
}

export default Component;
