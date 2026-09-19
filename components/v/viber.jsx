import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s52-_viwb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s52-_viwb"/>`,
		"fallback": "fa7-brands:viber",
	});
}

export default Component;
