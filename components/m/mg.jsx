import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/n/nfuyxl_cs.css';
import '../../css/b/bumn0k1qg.css';
import '../../css/k/ktu7lkf9s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="nfuyxl_cs"/><path class="bumn0k1qg"/><path class="ktu7lkf9s"/></g>`,
		"fallback": "circle-flags:mg",
	});
}

export default Component;
