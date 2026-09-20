import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl4-efmll.css';
import '../../css/u/ux165acwl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl4-efmll"/><path class="ux165acwl"/>`,
		"fallback": "octicon:repo-locked-16",
	});
}

export default Component;
