import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyp91c7tq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyp91c7tq"/>`,
		"fallback": "thesvg-color:silver-airways",
	});
}

export default Component;
