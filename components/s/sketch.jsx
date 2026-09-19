import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v763qvp_g.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v763qvp_g"/>`,
		"fallback": "fa7-brands:sketch",
	});
}

export default Component;
