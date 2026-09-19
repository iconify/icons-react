import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbwchz17z.css';
import '../../css/j/j8n5sacrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbwchz17z"/><path class="j8n5sacrb"/>`,
		"fallback": "boxicons:prawn",
	});
}

export default Component;
