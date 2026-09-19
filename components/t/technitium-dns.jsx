import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht-0wk75v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht-0wk75v"/>`,
		"fallback": "cbi:technitium-dns",
	});
}

export default Component;
