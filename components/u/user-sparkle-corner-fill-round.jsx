import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms-ka6b2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms-ka6b2w"/>`,
		"fallback": "coolicons:user-sparkle-corner-fill-round",
	});
}

export default Component;
