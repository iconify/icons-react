import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbg8k2e_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbg8k2e_h"/>`,
		"fallback": "reicon:received-filled",
	});
}

export default Component;
