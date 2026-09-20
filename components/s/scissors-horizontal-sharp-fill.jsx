import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/eu0_cqzeq.css';
import '../../css/p/psfejvbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="eu0_cqzeq"/><path class="psfejvbpj"/></g>`,
		"fallback": "keyline-icons:scissors-horizontal-sharp-fill",
	});
}

export default Component;
