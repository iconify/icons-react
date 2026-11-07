import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b133qtshg.css';
import '../../css/x/xc8aj3z1k.css';
import '../../css/b/b9e4xccvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b133qtshg"/><path clip-rule="evenodd" class="xc8aj3z1k"/><path clip-rule="evenodd" class="b9e4xccvm"/>`,
		"fallback": "solar:notification-unread-lines-bold",
	});
}

export default Component;
