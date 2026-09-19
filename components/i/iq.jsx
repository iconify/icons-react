import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wqbbqwb-i.css';
import '../../css/e/eygbctbjd.css';
import '../../css/r/r1nej4bfx.css';
import '../../css/r/r2s45ernj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="wqbbqwb-i"/><path class="eygbctbjd"/><path class="r1nej4bfx"/><path class="r2s45ernj"/></g>`,
		"fallback": "circle-flags:iq",
	});
}

export default Component;
