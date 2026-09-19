import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/h/hn2wqccqf.css';
import '../../css/d/d_w-rw5qb.css';
import '../../css/n/n8karrbkd.css';
import '../../css/n/np_2jveop.css';
import '../../css/x/xcyne6rvb.css';
import '../../css/t/t_yce6bio.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="hn2wqccqf"/><path class="d_w-rw5qb"/><path class="n8karrbkd"/><path class="np_2jveop"/><path class="xcyne6rvb"/><path class="t_yce6bio"/></g>`,
		"fallback": "circle-flags:us-nc",
	});
}

export default Component;
