import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgqttfboe.css';
import '../../css/f/f5dbbcraw.css';
import '../../css/s/s0v93zb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgqttfboe"/><path class="f5dbbcraw"/><path clip-rule="evenodd" class="s0v93zb7l"/>`,
		"fallback": "solar:tuning-square-2-bold",
	});
}

export default Component;
