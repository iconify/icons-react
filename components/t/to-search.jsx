import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu5wmynag.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu5wmynag"/>`,
		"fallback": "ix:to-search",
	});
}

export default Component;
