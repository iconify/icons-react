import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1y8h2bqm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l1y8h2bqm"/>`,
		"fallback": "streamline:production-belt-remix",
	});
}

export default Component;
