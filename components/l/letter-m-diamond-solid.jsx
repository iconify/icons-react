import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpwe93btg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpwe93btg"/>`,
		"fallback": "mynaui:letter-m-diamond-solid",
	});
}

export default Component;
