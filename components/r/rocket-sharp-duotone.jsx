import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/z859racns.css';
import '../../css/f/fjxiq25kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="z859racns"/><path class="fjxiq25kt"/></g>`,
		"fallback": "keyline-icons:rocket-sharp-duotone",
	});
}

export default Component;
