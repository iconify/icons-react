import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_s7ombqu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_s7ombqu"/>`,
		"fallback": "carbon:rule-grouping-data-quality",
	});
}

export default Component;
