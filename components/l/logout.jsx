import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acl-8db1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acl-8db1q"/>`,
		"fallback": "humbleicons:logout",
	});
}

export default Component;
