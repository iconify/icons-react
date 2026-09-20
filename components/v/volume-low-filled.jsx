import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np5mjvb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np5mjvb_i"/>`,
		"fallback": "reicon:volume-low-filled",
	});
}

export default Component;
