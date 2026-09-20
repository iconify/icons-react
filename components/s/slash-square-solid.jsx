import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1l7e8acw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1l7e8acw"/>`,
		"fallback": "mynaui:slash-square-solid",
	});
}

export default Component;
