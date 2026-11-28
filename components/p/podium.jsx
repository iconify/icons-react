import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp0k_5yna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp0k_5yna"/>`,
		"fallback": "noviair-light:podium",
	});
}

export default Component;
