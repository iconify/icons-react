import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/ba-7qfb9r.css';
import '../../css/p/pe49hd0tq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ba-7qfb9r"/><path class="pe49hd0tq"/></g>`,
		"fallback": "hugeicons:vest",
	});
}

export default Component;
