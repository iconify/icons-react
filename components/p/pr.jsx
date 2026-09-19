import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/n/nshssv-6h.css';
import '../../css/q/qxfu2d4lb.css';
import '../../css/m/m0fg2bb7t.css';
import '../../css/a/aota5ejaw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="nshssv-6h"/><path class="qxfu2d4lb"/><path class="m0fg2bb7t"/><path class="aota5ejaw"/></g>`,
		"fallback": "circle-flags:pr",
	});
}

export default Component;
