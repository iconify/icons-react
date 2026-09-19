import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eq1q1tbgm.css';
import '../../css/h/hp3kc7bgg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eq1q1tbgm"/><circle class="hp3kc7bgg"/></g>`,
		"fallback": "charm:search",
	});
}

export default Component;
