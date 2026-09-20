import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn40u_bfi.css';
import '../../css/b/bgo1-y9bf.css';
import '../../css/f/fvccocbzq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yn40u_bfi"/><path class="bgo1-y9bf"/><path class="fvccocbzq"/></g>`,
		"fallback": "thesvg-color:kokonut-ui-dark",
	});
}

export default Component;
