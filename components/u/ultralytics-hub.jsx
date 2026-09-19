import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrvyyj78y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrvyyj78y"/>`,
		"fallback": "fa7-brands:ultralytics-hub",
	});
}

export default Component;
