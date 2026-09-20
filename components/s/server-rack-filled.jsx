import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkj3fvbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkj3fvbts"/>`,
		"fallback": "ix:server-rack-filled",
	});
}

export default Component;
