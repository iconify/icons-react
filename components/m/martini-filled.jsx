import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdxa_275p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdxa_275p"/>`,
		"fallback": "boxicons:martini-filled",
	});
}

export default Component;
