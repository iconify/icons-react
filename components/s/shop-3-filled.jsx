import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq7ufdtte.css';
import '../../css/j/jb-34lb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq7ufdtte"/><path class="jb-34lb8e"/>`,
		"fallback": "tdesign:shop-3-filled",
	});
}

export default Component;
