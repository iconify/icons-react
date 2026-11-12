import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh_zxc2ug.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh_zxc2ug"/>`,
		"fallback": "selfhst:sportarr-light",
	});
}

export default Component;
