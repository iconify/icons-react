import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysgew1w2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysgew1w2t"/>`,
		"fallback": "mynaui:letter-r-solid",
	});
}

export default Component;
