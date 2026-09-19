import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsg5j7ibl.css';
import '../../css/s/szifr4b9l.css';
import '../../css/u/un755_b0c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsg5j7ibl"/><path class="szifr4b9l"/><path class="un755_b0c"/>`,
		"fallback": "famicons:reload-circle-outline",
	});
}

export default Component;
