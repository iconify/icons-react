import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/s/s537vx4xi.css';
import '../../css/p/p67k08bzn.css';
import '../../css/v/v1t-i1vki.css';
import '../../css/n/nso-o8oem.css';
import '../../css/n/nnvd89szz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="s537vx4xi"/><path class="p67k08bzn"/><path class="v1t-i1vki"/><path class="nso-o8oem"/><path class="nnvd89szz"/></g>`,
		"fallback": "circle-flags:us-ga",
	});
}

export default Component;
