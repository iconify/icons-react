import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz43omb9k.css';
import '../../css/h/hsrg7muou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz43omb9k"/><path clip-rule="evenodd" class="hsrg7muou"/>`,
		"fallback": "solar:like-bold-duotone",
	});
}

export default Component;
