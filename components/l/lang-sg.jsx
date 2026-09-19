import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/h/ho_wxqbsz.css';
import '../../css/u/ut2z4xbji.css';
import '../../css/t/t8tq0nvkz.css';
import '../../css/h/h8c2wccob.css';
import '../../css/p/pbmeiwbas.css';
import '../../css/u/uylshdcul.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="ho_wxqbsz"/><path class="ut2z4xbji"/><path class="t8tq0nvkz"/><path class="h8c2wccob"/><path class="pbmeiwbas"/><path class="uylshdcul"/></g>`,
		"fallback": "circle-flags:lang-sg",
	});
}

export default Component;
