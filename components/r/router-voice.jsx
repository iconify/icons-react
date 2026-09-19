import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2mh2_bbz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2mh2_bbz"/>`,
		"fallback": "carbon:router-voice",
	});
}

export default Component;
