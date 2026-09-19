import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zuh7kndha.css';
import '../../css/l/l0-geycet.css';
import '../../css/u/uo0juebya.css';
import '../../css/h/hfo190b-l.css';
import '../../css/e/eqbktkbhe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="zuh7kndha"/><path class="l0-geycet"/><path class="uo0juebya"/><path class="hfo190b-l"/><path class="eqbktkbhe"/></g>`,
		"fallback": "circle-flags:sv",
	});
}

export default Component;
