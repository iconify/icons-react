import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgws2bbph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgws2bbph"/>`,
		"fallback": "tdesign:video-camera-off",
	});
}

export default Component;
