import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_o6habgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_o6habgv"/>`,
		"fallback": "mynaui:letter-k-square-solid",
	});
}

export default Component;
