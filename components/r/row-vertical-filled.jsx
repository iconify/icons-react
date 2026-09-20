import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu68e7-kd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu68e7-kd"/>`,
		"fallback": "reicon:row-vertical-filled",
	});
}

export default Component;
