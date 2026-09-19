import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l5yooqbos.css';
import '../../css/a/adlmmac5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l5yooqbos"/><path class="adlmmac5b"/></g>`,
		"fallback": "hugeicons:task-01",
	});
}

export default Component;
