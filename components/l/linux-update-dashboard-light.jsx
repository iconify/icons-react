import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg35-r2sk.css';
import '../../css/i/ieqeobcsz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg35-r2sk"/><path class="ieqeobcsz"/>`,
		"fallback": "selfhst:linux-update-dashboard-light",
	});
}

export default Component;
