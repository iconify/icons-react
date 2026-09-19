import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/k/k6ndxgekw.css';
import '../../css/m/mwwjw2bdy.css';
import '../../css/v/v-5e1ufzn.css';
import '../../css/l/lj8d3vbvd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="k6ndxgekw"/><path class="mwwjw2bdy"/><path class="v-5e1ufzn"/><path class="lj8d3vbvd"/></g>`,
		"fallback": "circle-flags:mw",
	});
}

export default Component;
