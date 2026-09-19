import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxvfs20bi.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxvfs20bi"/>`,
		"fallback": "ant-design:twitch-filled",
	});
}

export default Component;
