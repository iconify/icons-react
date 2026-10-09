import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/x/x8k7hlbln.css';
import '../../css/l/lifaxmm9u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="x8k7hlbln"/><path class="lifaxmm9u"/>`,
		"fallback": "energy-icons:plus-circle-20",
	});
}

export default Component;
