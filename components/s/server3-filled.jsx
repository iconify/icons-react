import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz288ab_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mz288ab_o"/>`,
		"fallback": "reicon:server3-filled",
	});
}

export default Component;
