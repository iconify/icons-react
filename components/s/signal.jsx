import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7wxdacdf.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7wxdacdf"/>`,
		"fallback": "fa:signal",
	});
}

export default Component;
