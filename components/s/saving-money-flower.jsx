import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e-wq-gbry.css';
import '../../css/j/jd9oj6bsd.css';
import '../../css/m/me9fnacoo.css';
import '../../css/h/h84h5sl9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e-wq-gbry"/><path class="jd9oj6bsd"/><path class="me9fnacoo"/><path class="h84h5sl9h"/></g>`,
		"fallback": "streamline-ultimate:saving-money-flower",
	});
}

export default Component;
