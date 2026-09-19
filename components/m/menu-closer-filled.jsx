import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2vh03bjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2vh03bjw"/>`,
		"fallback": "boxicons:menu-closer-filled",
	});
}

export default Component;
