import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cps_kfs1y.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cps_kfs1y"/>`,
		"fallback": "jam:video-camera-f",
	});
}

export default Component;
