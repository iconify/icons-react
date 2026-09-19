import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9780c6bs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9780c6bs"/>`,
		"fallback": "cib:kaios",
	});
}

export default Component;
