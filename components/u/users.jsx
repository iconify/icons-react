import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w74n0pg_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w74n0pg_g"/>`,
		"fallback": "noviair-light:users",
	});
}

export default Component;
