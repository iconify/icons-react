import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9honpbet.css';
import '../../css/n/nu2_-nbje.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9honpbet"/><path class="nu2_-nbje"/>`,
		"fallback": "carbon:location-star",
	});
}

export default Component;
