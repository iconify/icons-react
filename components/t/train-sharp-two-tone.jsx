import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/d094f7bjn.css';
import '../../css/f/fbs5khb6z.css';
import '../../css/j/j3akw_70p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="d094f7bjn"/><path class="fbs5khb6z"/><path class="j3akw_70p"/></g>`,
		"fallback": "keyline-icons:train-sharp-two-tone",
	});
}

export default Component;
