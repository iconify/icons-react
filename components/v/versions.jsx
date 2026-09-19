import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3q_3l9wz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3q_3l9wz"/>`,
		"fallback": "codicon:versions",
	});
}

export default Component;
