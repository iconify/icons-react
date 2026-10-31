import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmqs1zb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmqs1zb5u"/>`,
		"fallback": "coolicons:thermometer-round",
	});
}

export default Component;
