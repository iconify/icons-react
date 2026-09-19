import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpx6_37as.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpx6_37as"/>`,
		"fallback": "fa7-brands:threema",
	});
}

export default Component;
