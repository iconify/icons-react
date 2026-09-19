import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j35eaocdf.css';
import '../../css/d/d3ppxtb2e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j35eaocdf"/><path class="d3ppxtb2e"/>`,
		"fallback": "carbon:volume-up",
	});
}

export default Component;
