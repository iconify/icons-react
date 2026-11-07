import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c77vne7ui.css';
import '../../css/a/aawp35beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c77vne7ui"/><path class="aawp35beb"/>`,
		"fallback": "solar:round-arrow-right-down-bold-duotone",
	});
}

export default Component;
