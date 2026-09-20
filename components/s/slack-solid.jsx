import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmv0kzbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmv0kzbvn"/>`,
		"fallback": "pixelarticons:slack-solid",
	});
}

export default Component;
