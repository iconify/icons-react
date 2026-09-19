import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycmdnnb_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycmdnnb_m"/>`,
		"fallback": "griddy-icons:ruler-filled",
	});
}

export default Component;
