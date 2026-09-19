import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuew-5_qh.css';

const viewBox = {"width":1280,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuew-5_qh"/>`,
		"fallback": "fa:pinterest-p",
	});
}

export default Component;
