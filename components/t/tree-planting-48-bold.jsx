import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihmii9b0s.css';
import '../../css/w/w-me-sb1b.css';
import '../../css/u/urmzceb0n.css';
import '../../css/b/b-1wnc-ph.css';
import '../../css/a/a6j7g-bmp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihmii9b0s"/><path class="w-me-sb1b"/><path class="urmzceb0n"/><path class="b-1wnc-ph"/><path class="a6j7g-bmp"/>`,
		"fallback": "energy-icons:tree-planting-48-bold",
	});
}

export default Component;
