import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st9o-6h2k.css';
import '../../css/l/lgnrw_bhn.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st9o-6h2k"/><path class="lgnrw_bhn"/>`,
		"fallback": "openmoji:up-down-black-arrow",
	});
}

export default Component;
