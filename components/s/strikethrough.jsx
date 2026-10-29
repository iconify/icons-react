import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es1645-bw.css';
import '../../css/x/xzun-2bvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es1645-bw wm-k"/><path class="wm-a xzun-2bvw"/>`,
		"fallback": "withicons-bauhaus:strikethrough",
	});
}

export default Component;
