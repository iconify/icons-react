import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsxvbkbsh.css';
import '../../css/n/nu2_-nbje.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsxvbkbsh"/><path class="nu2_-nbje"/>`,
		"fallback": "carbon:location-person",
	});
}

export default Component;
