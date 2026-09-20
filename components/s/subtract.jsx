import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti0yokb0d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti0yokb0d"/>`,
		"fallback": "ooui:subtract",
	});
}

export default Component;
