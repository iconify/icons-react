import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/makww4bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="makww4bef"/>`,
		"fallback": "reicon:kanban",
	});
}

export default Component;
