import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kss_nj_le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kss_nj_le"/>`,
		"fallback": "mingcute:sword-fill",
	});
}

export default Component;
