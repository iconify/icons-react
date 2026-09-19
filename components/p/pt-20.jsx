import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/cs-7pkbny.css';
import '../../css/q/qu47k8blr.css';
import '../../css/g/g48e13jxo.css';
import '../../css/f/f-grrttlb.css';
import '../../css/e/edfxeussi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="cs-7pkbny"/><path class="qu47k8blr"/><path class="g48e13jxo"/><path class="f-grrttlb"/><path class="edfxeussi"/></g>`,
		"fallback": "circle-flags:pt-20",
	});
}

export default Component;
