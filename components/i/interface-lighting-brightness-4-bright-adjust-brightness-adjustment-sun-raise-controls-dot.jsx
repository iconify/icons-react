import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/ksdo6_bvg.css';
import '../../css/f/fyssoz2ez.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="ksdo6_bvg"/><path class="fyssoz2ez"/></g>`,
		"fallback": "streamline:interface-lighting-brightness-4-bright-adjust-brightness-adjustment-sun-raise-controls-dot",
	});
}

export default Component;
