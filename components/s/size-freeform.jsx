import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0scm-xtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b y0scm-xtw"/>`,
		"fallback": "boxicons:size-freeform",
	});
}

export default Component;
