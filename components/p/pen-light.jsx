import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/umjxd7bux.css';
import '../../css/w/wmzzd2prd.css';
import '../../css/j/jicqrmboh.css';
import '../../css/z/z_j864liq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="umjxd7bux"/><path class="wmzzd2prd"/><circle class="jicqrmboh"/><path class="z_j864liq"/></g>`,
		"fallback": "lets-icons:pen-light",
	});
}

export default Component;
