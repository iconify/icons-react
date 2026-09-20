import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxsc4vt3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxsc4vt3d"/>`,
		"fallback": "tabler:message-2-off",
	});
}

export default Component;
