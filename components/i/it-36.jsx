import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/e/er099gbue.css';
import '../../css/o/oibw6_blp.css';
import '../../css/i/i-5inacsd.css';
import '../../css/w/w93mtxe5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="er099gbue"/><path class="oibw6_blp"/><path class="i-5inacsd"/><path class="w93mtxe5v"/></g>`,
		"fallback": "circle-flags:it-36",
	});
}

export default Component;
