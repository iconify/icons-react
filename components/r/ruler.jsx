import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thi1-bctc.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thi1-bctc"/>`,
		"fallback": "system-uicons:ruler",
	});
}

export default Component;
