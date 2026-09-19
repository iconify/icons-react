import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc0owzbih.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc0owzbih"/>`,
		"fallback": "fa7-brands:kickstarter-k",
	});
}

export default Component;
