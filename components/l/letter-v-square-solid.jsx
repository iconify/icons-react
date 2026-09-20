import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-9ht2b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-9ht2b4l"/>`,
		"fallback": "mynaui:letter-v-square-solid",
	});
}

export default Component;
