import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1r3rgtye.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1r3rgtye"/>`,
		"fallback": "ix:triangle-filled",
	});
}

export default Component;
