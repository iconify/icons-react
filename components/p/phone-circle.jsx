import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dnbuw2_kl.css';
import '../../css/g/gqqmwfb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dnbuw2_kl"/><path class="gqqmwfb0v"/></g>`,
		"fallback": "streamline-ultimate:phone-circle",
	});
}

export default Component;
