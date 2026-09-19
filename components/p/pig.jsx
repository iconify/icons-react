import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew_ugga8t.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew_ugga8t"/>`,
		"fallback": "vs:pig",
	});
}

export default Component;
