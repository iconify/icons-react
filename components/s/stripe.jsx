import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znzk-c_8v.css';

const viewBox = {"width":512,"height":214};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znzk-c_8v"/>`,
		"fallback": "thesvg-color:stripe",
	});
}

export default Component;
