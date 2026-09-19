import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj9z3ob_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj9z3ob_n"/>`,
		"fallback": "game-icons:slime",
	});
}

export default Component;
