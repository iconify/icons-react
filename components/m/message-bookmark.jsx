import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oma-vc_qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oma-vc_qi"/>`,
		"fallback": "pixelarticons:message-bookmark",
	});
}

export default Component;
