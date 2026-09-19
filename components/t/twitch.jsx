import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfa2_qe1l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfa2_qe1l"/>`,
		"fallback": "cib:twitch",
	});
}

export default Component;
