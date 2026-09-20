import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hhq4xj11e.css';
import '../../css/h/hp-o-fqmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hhq4xj11e"/><path class="hp-o-fqmv"/></g>`,
		"fallback": "keyline-icons:rotate-cw-plus-sharp-duotone",
	});
}

export default Component;
