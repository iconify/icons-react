import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/cju7w2k_k.css';
import '../../css/t/tvyc15znc.css';
import '../../css/c/c4d0165ua.css';
import '../../css/g/g6py6hitn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="cju7w2k_k"/><path class="tvyc15znc"/><path class="c4d0165ua"/><path class="g6py6hitn"/></g>`,
		"fallback": "circle-flags:kw",
	});
}

export default Component;
