import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-llkv2cb.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/y/yvef_mbda.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGOoGydekO" x1="142.799" x2="369.224" y1="454.17" y2="61.99" gradientTransform="matrix(1 0 0 -1 0 514.1)" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGOoGydekO)" class="yvef_mbda"/>`,
		"fallback": "selfhst:surrealdb-light",
	});
}

export default Component;
