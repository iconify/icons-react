import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak-sz5dbz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak-sz5dbz"/>`,
		"fallback": "carbon:socket",
	});
}

export default Component;
