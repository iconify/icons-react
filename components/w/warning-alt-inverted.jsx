import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt8z3m2uo.css';
import '../../css/r/r6ujjtbfh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt8z3m2uo"/><path class="r6ujjtbfh"/>`,
		"fallback": "carbon:warning-alt-inverted",
	});
}

export default Component;
