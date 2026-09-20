import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ikw832bkv.css';
import '../../css/w/w3k0rebur.css';
import '../../css/p/plrg5egrc.css';
import '../../css/r/rk_f2db5i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ikw832bkv"/><path class="w3k0rebur"/><path class="plrg5egrc"/><path class="rk_f2db5i"/></g>`,
		"fallback": "streamline-kameleon-color:traffic-light-duo",
	});
}

export default Component;
