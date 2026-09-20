import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asaqj9qwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asaqj9qwd"/>`,
		"fallback": "mdi:podium",
	});
}

export default Component;
