import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/d24_chumc.css';
import '../../css/m/m3zb7pkik.css';
import '../../css/n/nkepedu_g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="d24_chumc"/><path class="m3zb7pkik"/><path class="nkepedu_g"/></g>`,
		"fallback": "circle-flags:lang-tn",
	});
}

export default Component;
