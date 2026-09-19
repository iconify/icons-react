import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wap2xvans.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wap2xvans"/>`,
		"fallback": "cib:sprint",
	});
}

export default Component;
