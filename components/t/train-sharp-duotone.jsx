import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/d094f7bjn.css';
import '../../css/p/pzpi_ibpg.css';
import '../../css/j/j3akw_70p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="d094f7bjn"/><path class="pzpi_ibpg"/><path class="j3akw_70p"/></g>`,
		"fallback": "keyline-icons:train-sharp-duotone",
	});
}

export default Component;
