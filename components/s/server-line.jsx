import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl63q0_6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl63q0_6a"/>`,
		"fallback": "si:server-line",
	});
}

export default Component;
