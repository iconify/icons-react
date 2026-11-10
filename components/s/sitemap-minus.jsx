import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ril2l8bbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ril2l8bbu"/>`,
		"fallback": "tabler:sitemap-minus",
	});
}

export default Component;
