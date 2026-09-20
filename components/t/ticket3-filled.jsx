import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0vr8_z-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0vr8_z-p"/>`,
		"fallback": "reicon:ticket3-filled",
	});
}

export default Component;
