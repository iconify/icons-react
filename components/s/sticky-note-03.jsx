import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f2wygqz0f.css';
import '../../css/b/bdgub3-zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f2wygqz0f"/><path class="bdgub3-zm"/></g>`,
		"fallback": "hugeicons:sticky-note-03",
	});
}

export default Component;
