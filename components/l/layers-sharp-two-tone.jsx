import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/azy15lbvn.css';
import '../../css/v/ve3m53b2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="azy15lbvn"/><path class="ve3m53b2x"/></g>`,
		"fallback": "keyline-icons:layers-sharp-two-tone",
	});
}

export default Component;
