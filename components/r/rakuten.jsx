import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps35skh8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps35skh8k"/>`,
		"fallback": "thesvg-color:rakuten",
	});
}

export default Component;
