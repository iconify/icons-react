import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adh7oxwzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adh7oxwzu"/>`,
		"fallback": "mynaui:letter-l-circle-solid",
	});
}

export default Component;
