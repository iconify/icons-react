import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzrf_m8nb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzrf_m8nb"/>`,
		"fallback": "grommet-icons:new-window",
	});
}

export default Component;
