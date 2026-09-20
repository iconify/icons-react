import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6u24bczz.css';
import '../../css/k/k15odkf_p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6u24bczz"/><path class="k15odkf_p"/>`,
		"fallback": "octicon:project-roadmap-16",
	});
}

export default Component;
