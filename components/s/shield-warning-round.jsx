import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdt7u2b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdt7u2b9v"/>`,
		"fallback": "coolicons:shield-warning-round",
	});
}

export default Component;
