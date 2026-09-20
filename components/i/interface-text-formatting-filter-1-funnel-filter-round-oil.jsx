import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynbbxtazs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynbbxtazs"/>`,
		"fallback": "streamline:interface-text-formatting-filter-1-funnel-filter-round-oil",
	});
}

export default Component;
