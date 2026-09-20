import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9l9obcqk.css';

const viewBox = {"width":75,"height":33.51};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9l9obcqk"/>`,
		"fallback": "thesvg-color:soundcloud-dark",
	});
}

export default Component;
