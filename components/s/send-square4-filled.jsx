import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eckincbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eckincbby"/>`,
		"fallback": "reicon:send-square4-filled",
	});
}

export default Component;
