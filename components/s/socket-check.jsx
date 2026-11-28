import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4d-6lb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4d-6lb0x"/>`,
		"fallback": "noviair:socket-check",
	});
}

export default Component;
