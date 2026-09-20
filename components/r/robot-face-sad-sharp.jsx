import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb-9lm2dm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb-9lm2dm"/>`,
		"fallback": "pixelarticons:robot-face-sad-sharp",
	});
}

export default Component;
