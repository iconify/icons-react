import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6f4tmb7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6f4tmb7y"/>`,
		"fallback": "mdi:play-box-lock-open-outline",
	});
}

export default Component;
