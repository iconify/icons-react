import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imu2dnx8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imu2dnx8w"/>`,
		"fallback": "noviair:square",
	});
}

export default Component;
