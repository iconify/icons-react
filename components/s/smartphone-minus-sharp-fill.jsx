import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lbh94bg9m.css';
import '../../css/c/cqayu76ty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="lbh94bg9m"/><path class="cqayu76ty"/></g>`,
		"fallback": "keyline-icons:smartphone-minus-sharp-fill",
	});
}

export default Component;
