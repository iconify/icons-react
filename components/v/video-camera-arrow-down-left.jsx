import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx6ys8baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx6ys8baq"/>`,
		"fallback": "sidekickicons:video-camera-arrow-down-left",
	});
}

export default Component;
