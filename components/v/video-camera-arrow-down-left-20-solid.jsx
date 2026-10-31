import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysujw0_2t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ysujw0_2t"/>`,
		"fallback": "sidekickicons:video-camera-arrow-down-left-20-solid",
	});
}

export default Component;
