import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l7tqaabxy.css';
import '../../css/b/bpl1wezvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l7tqaabxy"/><path class="bpl1wezvp"/></g>`,
		"fallback": "hugeicons:monitor-stop",
	});
}

export default Component;
