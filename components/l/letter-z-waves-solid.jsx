import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt8h2yaft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt8h2yaft"/>`,
		"fallback": "mynaui:letter-z-waves-solid",
	});
}

export default Component;
