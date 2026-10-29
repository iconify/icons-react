import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rknu0wb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rknu0wb1z"/>`,
		"fallback": "vadivam:list-filter",
	});
}

export default Component;
