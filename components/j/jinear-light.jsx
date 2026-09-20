import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vykxr_z_l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vykxr_z_l"/>`,
		"fallback": "selfhst:jinear-light",
	});
}

export default Component;
