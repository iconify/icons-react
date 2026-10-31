import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi2hnbb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi2hnbb1q"/>`,
		"fallback": "coolicons:radiation-fill-round",
	});
}

export default Component;
