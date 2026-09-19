import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/ip73f5biq.css';
import '../../css/z/z40956d3w.css';
import '../../css/a/ashr6v62h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ip73f5biq"/><path class="z40956d3w"/><path class="ashr6v62h"/></g>`,
		"fallback": "circle-flags:it",
	});
}

export default Component;
