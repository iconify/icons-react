import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/om1j6ac9x.css';
import '../../css/n/nwswk1bnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="om1j6ac9x"/><path class="nwswk1bnh"/></g>`,
		"fallback": "hugeicons:obtuse",
	});
}

export default Component;
