import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao1aycnpn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao1aycnpn"/>`,
		"fallback": "carbon:star-half",
	});
}

export default Component;
