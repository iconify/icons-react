import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmy6ybc5p.css';
import '../../css/q/qwbk6jhrs.css';
import '../../css/z/z-hfbnbmq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="pmy6ybc5p"/><path class="qwbk6jhrs"/><circle class="z-hfbnbmq"/>`,
		"fallback": "selfhst:telltaledns",
	});
}

export default Component;
