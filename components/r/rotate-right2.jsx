import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz9ww4b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz9ww4b8t"/>`,
		"fallback": "reicon:rotate-right2",
	});
}

export default Component;
