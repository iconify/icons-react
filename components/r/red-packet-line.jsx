import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmup1_bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmup1_bgx"/>`,
		"fallback": "ri:red-packet-line",
	});
}

export default Component;
