import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmkuarf1x.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmkuarf1x"/>`,
		"fallback": "fa-solid:thermometer-three-quarters",
	});
}

export default Component;
