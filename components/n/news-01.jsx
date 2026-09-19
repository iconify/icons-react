import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ef0enlc8h.css';
import '../../css/i/ihkggclgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ef0enlc8h"/><path class="ihkggclgs"/></g>`,
		"fallback": "hugeicons:news-01",
	});
}

export default Component;
