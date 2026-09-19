import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_9hocblj.css';
import '../../css/j/jr2c_p1uz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_9hocblj"/><path clip-rule="evenodd" class="jr2c_p1uz"/>`,
		"fallback": "bitcoin-icons:mining-device-filled",
	});
}

export default Component;
