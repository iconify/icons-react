import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmpvnv02r.css';
import '../../css/s/sav6x4bmf.css';
import '../../css/g/g_gp7lgqe.css';
import '../../css/d/d20do-bxb.css';
import '../../css/i/ijshl6ulo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmpvnv02r"/><linearGradient id="SVGTspfFjxT" x1="380.818" x2="279.067" y1="401.318" y2="509.353" gradientTransform="translate(0 -278)" gradientUnits="userSpaceOnUse"><stop offset=".176" class="sav6x4bmf"/><stop offset="1" class="g_gp7lgqe"/></linearGradient><path fill="url(#SVGTspfFjxT)" class="d20do-bxb"/><linearGradient id="SVGtWznKJvW" x1="265.897" x2="148.049" y1="521.271" y2="639.326" gradientTransform="translate(0 -278)" gradientUnits="userSpaceOnUse"><stop offset=".176" class="sav6x4bmf"/><stop offset="1" class="g_gp7lgqe"/></linearGradient><path fill="url(#SVGtWznKJvW)" class="ijshl6ulo"/>`,
		"fallback": "selfhst:jira",
	});
}

export default Component;
