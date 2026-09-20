import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyhafj-ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyhafj-ho"/>`,
		"fallback": "mynaui:letter-h-diamond-solid",
	});
}

export default Component;
