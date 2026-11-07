import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpkanabje.css';
import '../../css/l/lc21qzuqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpkanabje"/><path class="lc21qzuqt"/>`,
		"fallback": "solar:user-bold",
	});
}

export default Component;
