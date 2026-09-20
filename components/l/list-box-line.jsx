import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfw00t5tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfw00t5tm"/>`,
		"fallback": "majesticons:list-box-line",
	});
}

export default Component;
