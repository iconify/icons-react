import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghtw4bbyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghtw4bbyx"/>`,
		"fallback": "reicon:pause-circle3-filled",
	});
}

export default Component;
