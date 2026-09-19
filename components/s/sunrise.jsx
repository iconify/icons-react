import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta3fb838w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta3fb838w"/>`,
		"fallback": "bi:sunrise",
	});
}

export default Component;
