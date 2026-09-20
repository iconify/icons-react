import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4me63b9r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4me63b9r"/>`,
		"fallback": "ix:publish",
	});
}

export default Component;
