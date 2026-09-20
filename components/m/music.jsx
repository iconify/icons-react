import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deb2onban.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="deb2onban"/>`,
		"fallback": "la:music",
	});
}

export default Component;
