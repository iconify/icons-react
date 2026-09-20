import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rej6b4bhy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rej6b4bhy"/>`,
		"fallback": "qlementine-icons:triangle-filled-16",
	});
}

export default Component;
