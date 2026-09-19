import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtv6wdbbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtv6wdbbp"/>`,
		"fallback": "iconamoon:sign-lemniscate-bold",
	});
}

export default Component;
