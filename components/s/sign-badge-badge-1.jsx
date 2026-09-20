import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fucf451kl.css';
import '../../css/g/g6imp1byx.css';
import '../../css/s/s-e5ewb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fucf451kl"/><path class="g6imp1byx"/><path class="s-e5ewb3y"/></g>`,
		"fallback": "streamline-ultimate-color:sign-badge-badge-1",
	});
}

export default Component;
