import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye3a0wb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye3a0wb8h"/>`,
		"fallback": "solar:video-frame-2-broken",
	});
}

export default Component;
