import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo9_91b2k.css';
import '../../css/a/a79tt-b_j.css';
import '../../css/q/q2lkf7xso.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo9_91b2k"/><path class="a79tt-b_j"/><path class="q2lkf7xso"/>`,
		"fallback": "energy-icons:stargazing-20-bold",
	});
}

export default Component;
