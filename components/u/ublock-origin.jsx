import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn_etb2ed.css';
import '../../css/a/aoms7-zgq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn_etb2ed"/><path class="aoms7-zgq"/>`,
		"fallback": "selfhst:ublock-origin",
	});
}

export default Component;
