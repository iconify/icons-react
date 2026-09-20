import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je6mkr0ti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je6mkr0ti"/>`,
		"fallback": "thesvg-color:totvs",
	});
}

export default Component;
