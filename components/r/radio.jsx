import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie7ll2bfh.css';
import '../../css/e/ei6p82b9q.css';
import '../../css/b/bue0babum.css';
import '../../css/q/qx4ca6bzw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ie7ll2bfh"/><path class="ei6p82b9q"/><path class="bue0babum"/><path class="qx4ca6bzw"/>`,
		"fallback": "famicons:radio",
	});
}

export default Component;
