import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3r9m9bab.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3r9m9bab"/>`,
		"fallback": "cil:toilet",
	});
}

export default Component;
