import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu8m7-b_x.css';
import '../../css/y/ytutm3h1u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu8m7-b_x"/><path class="ytutm3h1u"/>`,
		"fallback": "energy-icons:siren-48",
	});
}

export default Component;
