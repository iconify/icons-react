import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xus3r2plp.css';
import '../../css/o/orv7ykb9w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xus3r2plp"/><path class="orv7ykb9w"/>`,
		"fallback": "selfhst:threadfin-light",
	});
}

export default Component;
