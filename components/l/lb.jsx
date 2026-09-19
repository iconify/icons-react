import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/k/ksy1gcbdc.css';
import '../../css/u/uzxdcnbti.css';
import '../../css/t/t-dz9qbwh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ksy1gcbdc"/><path class="uzxdcnbti"/><path class="t-dz9qbwh"/></g>`,
		"fallback": "circle-flags:lb",
	});
}

export default Component;
