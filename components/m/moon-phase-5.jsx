import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zezddpp8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zezddpp8t"/>`,
		"fallback": "boxicons:moon-phase-5",
	});
}

export default Component;
