import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujqtv4rzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ujqtv4rzr"/>`,
		"fallback": "streamline-logos:microsoft-dynamics-logo-solid",
	});
}

export default Component;
