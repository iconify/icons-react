import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd-wl6bnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nd-wl6bnq"/>`,
		"fallback": "griddy-icons:tune-vertical-alt",
	});
}

export default Component;
