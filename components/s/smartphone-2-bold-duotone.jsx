import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpywgebrg.css';
import '../../css/v/v2zklq74z.css';
import '../../css/c/cg22ifrfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpywgebrg"/><path class="v2zklq74z"/><path class="cg22ifrfo"/>`,
		"fallback": "solar:smartphone-2-bold-duotone",
	});
}

export default Component;
