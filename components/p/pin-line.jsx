import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq98o4baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq98o4baq"/>`,
		"fallback": "si:pin-line",
	});
}

export default Component;
