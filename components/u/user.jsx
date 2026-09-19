import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/w7b7i40wv.css';
import '../../css/z/z6d_ftb-e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="w7b7i40wv"/><path class="z6d_ftb-e"/></g>`,
		"fallback": "icon-park-solid:user",
	});
}

export default Component;
