import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb7732w4a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wb7732w4a"/>`,
		"fallback": "healthicons:negative-negative",
	});
}

export default Component;
