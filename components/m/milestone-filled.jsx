import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwa_iep3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwa_iep3r"/>`,
		"fallback": "griddy-icons:milestone-filled",
	});
}

export default Component;
