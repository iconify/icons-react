import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwd01r-qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwd01r-qb"/>`,
		"fallback": "ri:menu-unfold-4-fill",
	});
}

export default Component;
