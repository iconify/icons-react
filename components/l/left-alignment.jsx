import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zta2u8b6n.css';
import '../../css/w/w5agp-bwy.css';
import '../../css/e/evfg-fbgm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="zta2u8b6n"/><path class="w5agp-bwy"/><path class="evfg-fbgm"/></g>`,
		"fallback": "icon-park:left-alignment",
	});
}

export default Component;
