import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx7pczt_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx7pczt_g"/>`,
		"fallback": "mdi:web-camera",
	});
}

export default Component;
