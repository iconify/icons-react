import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg8ef5bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg8ef5bno"/>`,
		"fallback": "mynaui:text-align-center-solid",
	});
}

export default Component;
