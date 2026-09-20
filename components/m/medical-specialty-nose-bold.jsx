import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3dkirz7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3dkirz7d"/>`,
		"fallback": "streamline-ultimate:medical-specialty-nose-bold",
	});
}

export default Component;
