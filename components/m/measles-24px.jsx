import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eo_p0ebow.css';
import '../../css/v/vagu0vbgp.css';
import '../../css/m/m5ap_-bph.css';
import '../../css/k/kxek-tbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eo_p0ebow"/><path class="vagu0vbgp"/><path clip-rule="evenodd" class="m5ap_-bph"/><path class="kxek-tbdd"/></g>`,
		"fallback": "healthicons:measles-24px",
	});
}

export default Component;
