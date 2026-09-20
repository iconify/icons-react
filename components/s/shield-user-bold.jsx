import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjwzk4bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qjwzk4bpq"/>`,
		"fallback": "solar:shield-user-bold",
	});
}

export default Component;
