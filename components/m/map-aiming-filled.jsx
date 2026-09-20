import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm1o5wb2q.css';
import '../../css/n/n5z0o6g9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm1o5wb2q"/><path class="n5z0o6g9i"/>`,
		"fallback": "tdesign:map-aiming-filled",
	});
}

export default Component;
