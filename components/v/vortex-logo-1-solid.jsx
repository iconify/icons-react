import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhehsq8vh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhehsq8vh"/>`,
		"fallback": "streamline-logos:vortex-logo-1-solid",
	});
}

export default Component;
