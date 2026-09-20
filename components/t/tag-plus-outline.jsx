import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijh1c3bpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijh1c3bpn"/>`,
		"fallback": "mdi:tag-plus-outline",
	});
}

export default Component;
