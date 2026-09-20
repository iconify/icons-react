import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll5a85z9g.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll5a85z9g"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:orange-flag",
	});
}

export default Component;
