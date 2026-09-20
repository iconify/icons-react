import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma4-3e-vw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma4-3e-vw"/>`,
		"fallback": "ri:route-fill",
	});
}

export default Component;
