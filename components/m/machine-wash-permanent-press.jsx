import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6loahb8d.css';

const viewBox = {"width":528,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6loahb8d"/>`,
		"fallback": "ps:machine-wash-permanent-press",
	});
}

export default Component;
