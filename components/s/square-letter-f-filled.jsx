import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw1h23mpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw1h23mpu"/>`,
		"fallback": "tabler:square-letter-f-filled",
	});
}

export default Component;
