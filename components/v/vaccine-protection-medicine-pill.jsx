import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tp-m4ox4l.css';
import '../../css/v/vbel9cu5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tp-m4ox4l"/><path class="vbel9cu5j"/></g>`,
		"fallback": "covid:vaccine-protection-medicine-pill",
	});
}

export default Component;
