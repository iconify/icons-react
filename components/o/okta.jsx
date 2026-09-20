import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b07s0zb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b07s0zb2q"/>`,
		"fallback": "thesvg:okta",
	});
}

export default Component;
