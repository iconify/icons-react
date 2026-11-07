import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqbs--b0w.css';
import '../../css/b/bgpl6nb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqbs--b0w"/><path clip-rule="evenodd" class="bgpl6nb6e"/>`,
		"fallback": "solar:remote-controller-bold",
	});
}

export default Component;
