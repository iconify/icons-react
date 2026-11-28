import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m72nq6vxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m72nq6vxn"/>`,
		"fallback": "noviair:tornado",
	});
}

export default Component;
