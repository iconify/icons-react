import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwde-vb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwde-vb2r"/>`,
		"fallback": "griddy-icons:soundcloud-filled",
	});
}

export default Component;
