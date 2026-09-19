import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kscenjt4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kscenjt4y"/>`,
		"fallback": "bxs:report",
	});
}

export default Component;
