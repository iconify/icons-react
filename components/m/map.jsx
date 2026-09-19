import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk-q3dbni.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk-q3dbni"/>`,
		"fallback": "at-icons:map",
	});
}

export default Component;
