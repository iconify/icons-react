import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yse3hhf5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yse3hhf5o"/>`,
		"fallback": "icon-park-outline:spanner",
	});
}

export default Component;
