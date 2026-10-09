import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntlisvb1z.css';
import '../../css/u/u1qifac6a.css';
import '../../css/c/cs4mpneqe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntlisvb1z"/><path class="u1qifac6a"/><path class="cs4mpneqe"/>`,
		"fallback": "energy-icons:tape-measure-20",
	});
}

export default Component;
