import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5zqdzbrm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5zqdzbrm"/>`,
		"fallback": "fa7-brands:ussunnah",
	});
}

export default Component;
