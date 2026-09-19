import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjkj1o2_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjkj1o2_a"/>`,
		"fallback": "boxicons:move-filled",
	});
}

export default Component;
