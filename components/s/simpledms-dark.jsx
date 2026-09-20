import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aifktcb-l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aifktcb-l"/>`,
		"fallback": "selfhst:simpledms-dark",
	});
}

export default Component;
