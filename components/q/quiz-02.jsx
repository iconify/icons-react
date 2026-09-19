import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jg1e7ries.css';
import '../../css/g/gk3khdcex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jg1e7ries"/><path class="gk3khdcex"/></g>`,
		"fallback": "hugeicons:quiz-02",
	});
}

export default Component;
