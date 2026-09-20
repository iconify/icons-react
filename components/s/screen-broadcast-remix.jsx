import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vod3zxb3c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vod3zxb3c"/>`,
		"fallback": "streamline:screen-broadcast-remix",
	});
}

export default Component;
