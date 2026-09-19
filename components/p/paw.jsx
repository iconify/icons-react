import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjvc_dj1l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjvc_dj1l"/>`,
		"fallback": "fa-solid:paw",
	});
}

export default Component;
