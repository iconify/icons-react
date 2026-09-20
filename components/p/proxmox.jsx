import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yldie4v8a.css';
import '../../css/h/hiz_q4neb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yldie4v8a"/><path class="hiz_q4neb"/>`,
		"fallback": "selfhst:proxmox",
	});
}

export default Component;
