import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khb354thf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khb354thf"/>`,
		"fallback": "majesticons:ruler-2-line",
	});
}

export default Component;
