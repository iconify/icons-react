import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnobr9b0y.css';
import '../../css/s/svdy80z7e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnobr9b0y"/><path class="svdy80z7e"/>`,
		"fallback": "carbon:next-outline",
	});
}

export default Component;
