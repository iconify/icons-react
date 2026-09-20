import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx0gpq2uu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qx0gpq2uu"/>`,
		"fallback": "streamline-logos:microsoft-dynamics-logo-block",
	});
}

export default Component;
