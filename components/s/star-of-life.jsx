import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yws3_pbhc.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yws3_pbhc"/>`,
		"fallback": "fa-solid:star-of-life",
	});
}

export default Component;
