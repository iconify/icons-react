import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shc5ox2kp.css';
import '../../css/j/jerfmgb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shc5ox2kp"/><path clip-rule="evenodd" class="jerfmgb3k"/>`,
		"fallback": "solar:running-2-bold",
	});
}

export default Component;
