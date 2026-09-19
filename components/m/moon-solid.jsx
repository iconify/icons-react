import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxp94h8ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxp94h8ew"/>`,
		"fallback": "basil:moon-solid",
	});
}

export default Component;
