import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc1rpebar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc1rpebar"/>`,
		"fallback": "noviair-light:playlist-refresh",
	});
}

export default Component;
