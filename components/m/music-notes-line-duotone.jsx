import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mw8ccub0a.css';
import '../../css/j/jzhpb3bqb.css';
import '../../css/q/q5ty2f3-s.css';
import '../../css/a/axclidckd.css';
import '../../css/h/hurtu1upa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mw8ccub0a"/><path class="jzhpb3bqb"/><path class="q5ty2f3-s"/><path class="axclidckd"/><path class="hurtu1upa"/></g>`,
		"fallback": "solar:music-notes-line-duotone",
	});
}

export default Component;
