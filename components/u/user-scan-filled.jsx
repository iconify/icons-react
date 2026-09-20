import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip6m2qbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip6m2qbtu"/>`,
		"fallback": "reicon:user-scan-filled",
	});
}

export default Component;
