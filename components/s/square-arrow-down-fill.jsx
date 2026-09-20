import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kslszo2im.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kslszo2im"/>`,
		"fallback": "keyline-icons:square-arrow-down-fill",
	});
}

export default Component;
