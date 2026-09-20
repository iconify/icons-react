import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zu0xp-b1x.css';
import '../../css/s/sqpy8z9jl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zu0xp-b1x"/><path class="sqpy8z9jl"/></g>`,
		"fallback": "tdesign:meat-pepper",
	});
}

export default Component;
