import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/evp-9tp1h.css';
import '../../css/i/ikkmop7xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="evp-9tp1h"/><path class="ikkmop7xj"/></g>`,
		"fallback": "streamline-ultimate:style-one-pin-check",
	});
}

export default Component;
