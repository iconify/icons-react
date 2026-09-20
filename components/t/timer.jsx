import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yds4fl__v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yds4fl__v"/>`,
		"fallback": "vadivam:timer",
	});
}

export default Component;
