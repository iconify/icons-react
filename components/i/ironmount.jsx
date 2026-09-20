import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tguvsp97z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tguvsp97z"/>`,
		"fallback": "selfhst:ironmount",
	});
}

export default Component;
