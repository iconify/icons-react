import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjrjh-9qh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjrjh-9qh"/>`,
		"fallback": "bi:pen",
	});
}

export default Component;
