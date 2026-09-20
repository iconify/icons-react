import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jmr6qdb5q.css';
import '../../css/o/o0i-ddfqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jmr6qdb5q"/><path class="o0i-ddfqb"/></g>`,
		"fallback": "reicon:nodes",
	});
}

export default Component;
