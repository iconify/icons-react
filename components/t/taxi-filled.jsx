import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc1vbacqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc1vbacqm"/>`,
		"fallback": "griddy-icons:taxi-filled",
	});
}

export default Component;
