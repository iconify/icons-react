import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxc5to3rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxc5to3rt"/>`,
		"fallback": "boxicons:texture-filled",
	});
}

export default Component;
