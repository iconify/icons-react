import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpa8qabrh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st0 wpa8qabrh"/>`,
		"fallback": "dashicons:remove",
	});
}

export default Component;
