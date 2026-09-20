import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rho5ahrvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rho5ahrvn"/>`,
		"fallback": "ri:poker-clubs-fill",
	});
}

export default Component;
