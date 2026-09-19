import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/u8og5ib4e.css';
import '../../css/i/imzf02b2e.css';
import '../../css/s/snftt664s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="u8og5ib4e"/><path class="fil1 imzf02b2e"/><path class="fil1 snftt664s"/></g>`,
		"fallback": "circle-flags:ru-cu",
	});
}

export default Component;
