import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6lft_bql.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6lft_bql"/>`,
		"fallback": "ep:select",
	});
}

export default Component;
