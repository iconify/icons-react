import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcfkm2bxu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mcfkm2bxu"/>`,
		"fallback": "streamline:video-swap-camera-remix",
	});
}

export default Component;
