import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tirob2dio.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tirob2dio"/>`,
		"fallback": "fa-brands:sistrix",
	});
}

export default Component;
