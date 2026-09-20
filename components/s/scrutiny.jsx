import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhdy70bcr.css';
import '../../css/l/l2895_5bw.css';
import '../../css/f/fo69pib0w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhdy70bcr"/><path class="l2895_5bw"/><path class="fo69pib0w"/>`,
		"fallback": "selfhst:scrutiny",
	});
}

export default Component;
