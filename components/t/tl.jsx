import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/v/vfa2ogh1h.css';
import '../../css/w/wle1ht-hp.css';
import '../../css/q/qvdirabnc.css';
import '../../css/s/smjgjkbdy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="vfa2ogh1h"/><path class="wle1ht-hp"/><path class="qvdirabnc"/><path class="smjgjkbdy"/></g>`,
		"fallback": "circle-flags:tl",
	});
}

export default Component;
