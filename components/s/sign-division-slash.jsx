import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uul-ip37v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uul-ip37v"/>`,
		"fallback": "iconamoon:sign-division-slash",
	});
}

export default Component;
