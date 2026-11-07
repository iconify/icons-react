import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezqx6dokg.css';
import '../../css/k/kmymo-b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezqx6dokg"/><path clip-rule="evenodd" class="kmymo-b1s"/>`,
		"fallback": "solar:sticker-smile-circle-bold",
	});
}

export default Component;
