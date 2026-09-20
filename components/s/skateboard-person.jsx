import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rmo2pobnh.css';
import '../../css/f/fhm-vhbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rmo2pobnh"/><path class="fhm-vhbvo"/></g>`,
		"fallback": "streamline-ultimate:skateboard-person",
	});
}

export default Component;
