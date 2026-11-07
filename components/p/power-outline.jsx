import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoj597b8y.css';
import '../../css/l/lb_j2db8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoj597b8y"/><path class="lb_j2db8n"/>`,
		"fallback": "solar:power-outline",
	});
}

export default Component;
