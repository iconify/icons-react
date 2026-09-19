import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn3v8nbau.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn3v8nbau"/>`,
		"fallback": "fa7-solid:ruler-vertical",
	});
}

export default Component;
