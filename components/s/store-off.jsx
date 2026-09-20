import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhm3v8bki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhm3v8bki"/>`,
		"fallback": "mdi:store-off",
	});
}

export default Component;
