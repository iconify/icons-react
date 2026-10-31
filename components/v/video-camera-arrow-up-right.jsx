import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a56926qld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a56926qld"/>`,
		"fallback": "sidekickicons:video-camera-arrow-up-right",
	});
}

export default Component;
