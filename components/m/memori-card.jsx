import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rembanb4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rembanb4p"/>`,
		"fallback": "subway:memori-card",
	});
}

export default Component;
