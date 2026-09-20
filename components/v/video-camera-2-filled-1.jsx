import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-qns-azb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-qns-azb"/>`,
		"fallback": "tdesign:video-camera-2-filled-1",
	});
}

export default Component;
