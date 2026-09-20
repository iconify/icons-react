import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urhqt-mbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="urhqt-mbd"/>`,
		"fallback": "streamline-sharp:laptop-project-screen-solid",
	});
}

export default Component;
