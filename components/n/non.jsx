import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/b/brmn1ccqk.css';
import '../../css/n/nft682v4h.css';
import '../../css/k/kbe5kybxy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="brmn1ccqk"/><path class="nft682v4h"/><path class="kbe5kybxy"/></g>`,
		"fallback": "circle-flags:non",
	});
}

export default Component;
