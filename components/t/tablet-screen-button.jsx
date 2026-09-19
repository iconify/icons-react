import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l47g3z7af.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l47g3z7af"/>`,
		"fallback": "fa7-solid:tablet-screen-button",
	});
}

export default Component;
