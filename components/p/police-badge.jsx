import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g34w8dbuk.css';
import '../../css/o/okug9nb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g34w8dbuk"/><path class="okug9nb4v"/></g>`,
		"fallback": "hugeicons:police-badge",
	});
}

export default Component;
