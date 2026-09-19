import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktv_4zb_t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktv_4zb_t"/>`,
		"fallback": "entypo:trophy",
	});
}

export default Component;
