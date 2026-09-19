import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe4vwfu9e.css';
import '../../css/d/d8r3yjb_b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe4vwfu9e"/><path class="d8r3yjb_b"/>`,
		"fallback": "carbon:text-link",
	});
}

export default Component;
