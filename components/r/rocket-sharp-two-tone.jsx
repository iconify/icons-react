import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/z859racns.css';
import '../../css/n/n2nc3dlgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="z859racns"/><path class="n2nc3dlgl"/></g>`,
		"fallback": "keyline-icons:rocket-sharp-two-tone",
	});
}

export default Component;
