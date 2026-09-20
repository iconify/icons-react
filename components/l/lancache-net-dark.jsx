import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is_oe-rmg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="is_oe-rmg"/>`,
		"fallback": "selfhst:lancache-net-dark",
	});
}

export default Component;
