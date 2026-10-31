import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfk9wvb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfk9wvb1r"/>`,
		"fallback": "coolicons:linkedin-fill-round",
	});
}

export default Component;
