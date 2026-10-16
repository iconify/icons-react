import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0topkbwv.css';
import '../../css/w/w673-_bht.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0topkbwv"/><path class="w673-_bht"/>`,
		"fallback": "energy-icons:magma-chamber-20",
	});
}

export default Component;
