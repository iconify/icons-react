import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s73lsdbgh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s73lsdbgh"/>`,
		"fallback": "carbon:json",
	});
}

export default Component;
