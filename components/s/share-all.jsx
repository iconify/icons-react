import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn79_h0_p.css';
import '../../css/q/qt5cq3bzf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn79_h0_p"/><path class="qt5cq3bzf"/>`,
		"fallback": "cil:share-all",
	});
}

export default Component;
