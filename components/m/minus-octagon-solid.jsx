import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1_2t6b9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1_2t6b9a"/>`,
		"fallback": "mynaui:minus-octagon-solid",
	});
}

export default Component;
