import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhokxhy4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhokxhy4d"/>`,
		"fallback": "noviair:org-chart-plus",
	});
}

export default Component;
