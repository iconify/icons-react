import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv01ucbgq.css';
import '../../css/b/bp49p9l1j.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv01ucbgq"/><path class="bp49p9l1j"/>`,
		"fallback": "openmoji:lizard",
	});
}

export default Component;
