import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czbj6bb-q.css';
import '../../css/r/rioz_6b_m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czbj6bb-q"/><path class="rioz_6b_m"/>`,
		"fallback": "carbon:mail-reply",
	});
}

export default Component;
