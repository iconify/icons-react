import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyai-pb1h.css';

const viewBox = {"width":1472,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyai-pb1h"/>`,
		"fallback": "fa:vine",
	});
}

export default Component;
