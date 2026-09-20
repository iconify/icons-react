import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktndi-n6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktndi-n6j"/>`,
		"fallback": "majesticons:iphone-old-apps-line",
	});
}

export default Component;
