import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahdk97bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahdk97bpu"/>`,
		"fallback": "streamline-logos:shadow-tech-logo-solid",
	});
}

export default Component;
