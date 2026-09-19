import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6ijimd2c.css';
import '../../css/v/vt4x3hbdv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6ijimd2c"/><path class="vt4x3hbdv"/>`,
		"fallback": "heroicons:phone-x-mark-16-solid",
	});
}

export default Component;
