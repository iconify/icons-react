import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtgod5c3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtgod5c3b"/>`,
		"fallback": "iconaut:repeat-solid",
	});
}

export default Component;
