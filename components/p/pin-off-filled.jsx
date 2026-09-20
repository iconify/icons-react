import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymol9uw0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymol9uw0p"/>`,
		"fallback": "reicon:pin-off-filled",
	});
}

export default Component;
