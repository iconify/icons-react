import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd4ogl5wu.css';
import '../../css/o/oqzccw9bw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="qd4ogl5wu"/><path class="oqzccw9bw"/>`,
		"fallback": "carbon:logical-partition",
	});
}

export default Component;
