import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2vctekuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2vctekuj"/>`,
		"fallback": "coolicons:shield-off-round",
	});
}

export default Component;
