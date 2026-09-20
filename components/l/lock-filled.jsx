import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5et3fz1p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5et3fz1p"/>`,
		"fallback": "ix:lock-filled",
	});
}

export default Component;
