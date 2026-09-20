import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drq72ey7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drq72ey7f"/>`,
		"fallback": "mingcute:user-info-fill",
	});
}

export default Component;
