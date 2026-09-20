import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zjkywbcdc.css';
import '../../css/f/fsiud9rqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zjkywbcdc"/><path class="fsiud9rqu"/></g>`,
		"fallback": "keyline-icons:leaf-sharp-two-tone",
	});
}

export default Component;
