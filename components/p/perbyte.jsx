import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh4drtbyn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh4drtbyn"/>`,
		"fallback": "fa7-brands:perbyte",
	});
}

export default Component;
