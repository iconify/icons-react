import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk7y_4b-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk7y_4b-l"/>`,
		"fallback": "mynaui:letter-n",
	});
}

export default Component;
