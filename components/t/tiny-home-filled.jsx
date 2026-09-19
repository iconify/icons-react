import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf4l17ywk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf4l17ywk"/>`,
		"fallback": "boxicons:tiny-home-filled",
	});
}

export default Component;
