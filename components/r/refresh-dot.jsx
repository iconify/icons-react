import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lm939zbdz.css';
import '../../css/p/p_klmybkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lm939zbdz"/><path class="p_klmybkg"/></g>`,
		"fallback": "hugeicons:refresh-dot",
	});
}

export default Component;
