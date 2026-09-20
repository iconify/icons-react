import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiho0ob9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiho0ob9d"/>`,
		"fallback": "tabler:receipt-yen-filled",
	});
}

export default Component;
