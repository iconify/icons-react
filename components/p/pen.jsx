import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/u/umjxd7bux.css';
import '../../css/w/wmzzd2prd.css';
import '../../css/p/p3vlh0i5k.css';
import '../../css/z/z_j864liq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="umjxd7bux"/><path class="wmzzd2prd"/><circle class="p3vlh0i5k"/><path class="z_j864liq"/></g>`,
		"fallback": "lets-icons:pen",
	});
}

export default Component;
