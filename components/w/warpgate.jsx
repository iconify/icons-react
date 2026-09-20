import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do5wwxbpa.css';
import '../../css/a/az6iwibpt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do5wwxbpa"/><path class="az6iwibpt"/>`,
		"fallback": "selfhst:warpgate",
	});
}

export default Component;
