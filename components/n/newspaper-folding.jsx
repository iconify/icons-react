import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/ne_mu8bfp.css';
import '../../css/v/vqwjveb2n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ne_mu8bfp"/><path class="vqwjveb2n"/></g>`,
		"fallback": "icon-park-outline:newspaper-folding",
	});
}

export default Component;
