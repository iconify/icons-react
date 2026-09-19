import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/o/oodg9xnls.css';
import '../../css/p/pjxgy460f.css';
import '../../css/t/th1f1wbpv.css';
import '../../css/c/cprcju88v.css';
import '../../css/f/fje04engg.css';
import '../../css/h/hhx9shbah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="oodg9xnls"/><path class="pjxgy460f"/><path class="th1f1wbpv"/><path class="cprcju88v"/><path class="fje04engg"/><path class="hhx9shbah"/></g>`,
		"fallback": "circle-flags:tm",
	});
}

export default Component;
