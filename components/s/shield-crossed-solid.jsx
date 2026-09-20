import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e11jas_xe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e11jas_xe"/>`,
		"fallback": "mynaui:shield-crossed-solid",
	});
}

export default Component;
