import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md81p0dal.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md81p0dal"/>`,
		"fallback": "selfhst:linuxgsm-light",
	});
}

export default Component;
