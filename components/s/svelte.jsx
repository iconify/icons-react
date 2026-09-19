import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llh11yb1a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llh11yb1a"/>`,
		"fallback": "fa7-brands:svelte",
	});
}

export default Component;
