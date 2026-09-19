import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a1842w96q.css';
import '../../css/a/arjifdfsw.css';
import '../../css/a/asjz9wbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a1842w96q"/><path class="arjifdfsw"/><path class="asjz9wbza"/></g>`,
		"fallback": "hugeicons:vomiting",
	});
}

export default Component;
