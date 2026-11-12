import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jelsw2bbk.css';
import '../../css/p/phs9k_bln.css';
import '../../css/t/tjav81vfv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jelsw2bbk"/><path class="phs9k_bln"/><path class="tjav81vfv"/>`,
		"fallback": "selfhst:streamyfin-dark",
	});
}

export default Component;
