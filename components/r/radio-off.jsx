import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmm2vgbtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmm2vgbtj"/>`,
		"fallback": "noviair:radio-off",
	});
}

export default Component;
