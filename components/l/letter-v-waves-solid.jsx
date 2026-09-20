import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1waho__y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1waho__y"/>`,
		"fallback": "mynaui:letter-v-waves-solid",
	});
}

export default Component;
