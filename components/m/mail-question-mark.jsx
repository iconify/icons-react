import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/er_8fkb_v.css';
import '../../css/b/b4fopkour.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="er_8fkb_v"/><path class="b4fopkour"/></g>`,
		"fallback": "hugeicons:mail-question-mark",
	});
}

export default Component;
