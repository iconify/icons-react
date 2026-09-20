import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd9lj4vea.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd9lj4vea"/>`,
		"fallback": "lineicons:users",
	});
}

export default Component;
