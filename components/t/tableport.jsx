import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ainqy8tnn.css';

const viewBox = {"width":653,"height":71};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ainqy8tnn"/>`,
		"fallback": "thesvg-color:tableport",
	});
}

export default Component;
