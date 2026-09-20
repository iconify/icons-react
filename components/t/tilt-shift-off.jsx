import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nglwi1b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nglwi1b4r"/>`,
		"fallback": "tabler:tilt-shift-off",
	});
}

export default Component;
