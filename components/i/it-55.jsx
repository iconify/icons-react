import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rms4c_byq.css';
import '../../css/w/wdbur4bto.css';
import '../../css/r/rnsic0guk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="rms4c_byq"/><path class="wdbur4bto"/><path class="rnsic0guk"/></g>`,
		"fallback": "circle-flags:it-55",
	});
}

export default Component;
