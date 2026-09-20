import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgz7o1bwh.css';
import '../../css/a/atikj6bha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgz7o1bwh"/><circle class="atikj6bha"/>`,
		"fallback": "mingcute:key-4-line",
	});
}

export default Component;
