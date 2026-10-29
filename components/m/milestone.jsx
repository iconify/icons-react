import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg-0z5wjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg-0z5wjd"/>`,
		"fallback": "vadivam:milestone",
	});
}

export default Component;
