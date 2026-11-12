import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu3nx1j7v.css';
import '../../css/n/npei64rnx.css';
import '../../css/f/fpfbwk8vq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu3nx1j7v"/><path class="npei64rnx"/><path class="fpfbwk8vq"/>`,
		"fallback": "selfhst:outline",
	});
}

export default Component;
