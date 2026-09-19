import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu8hkab6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu8hkab6k"/>`,
		"fallback": "cbi:merx-ipc-horizon-dome-alt",
	});
}

export default Component;
