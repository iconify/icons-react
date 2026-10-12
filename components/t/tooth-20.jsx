import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh2evfk1x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh2evfk1x"/>`,
		"fallback": "energy-icons:tooth-20",
	});
}

export default Component;
