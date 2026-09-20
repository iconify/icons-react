import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gogw79u_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gogw79u_x"/>`,
		"fallback": "mynaui:letter-v-hexagon-solid",
	});
}

export default Component;
