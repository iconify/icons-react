import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwxx7l1ub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwxx7l1ub"/>`,
		"fallback": "coolicons:shield-lock-round",
	});
}

export default Component;
