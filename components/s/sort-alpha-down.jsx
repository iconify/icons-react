import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzy-a35gm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzy-a35gm"/>`,
		"fallback": "cil:sort-alpha-down",
	});
}

export default Component;
