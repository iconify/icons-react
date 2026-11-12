import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_ihf0bwu.css';
import '../../css/t/t1xci_blt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_ihf0bwu"/><path class="t1xci_blt"/>`,
		"fallback": "selfhst:wardrowbe-light",
	});
}

export default Component;
