import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8p1x2bhw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8p1x2bhw"/>`,
		"fallback": "fa7-solid:school-circle-exclamation",
	});
}

export default Component;
