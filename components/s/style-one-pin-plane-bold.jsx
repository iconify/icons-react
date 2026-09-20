import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hym10un3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hym10un3h"/>`,
		"fallback": "streamline-ultimate:style-one-pin-plane-bold",
	});
}

export default Component;
