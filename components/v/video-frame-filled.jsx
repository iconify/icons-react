import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgh92ubxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgh92ubxo"/>`,
		"fallback": "reicon:video-frame-filled",
	});
}

export default Component;
