import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwc03jzoe.css';
import '../../css/z/zalphcmjo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwc03jzoe"/><path class="zalphcmjo"/>`,
		"fallback": "carbon:progress-bar",
	});
}

export default Component;
