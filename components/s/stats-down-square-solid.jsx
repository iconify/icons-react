import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jswr-7bkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jswr-7bkz"/>`,
		"fallback": "iconoir:stats-down-square-solid",
	});
}

export default Component;
