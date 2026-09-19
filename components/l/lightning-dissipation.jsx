import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjls1k5-l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjls1k5-l"/>`,
		"fallback": "game-icons:lightning-dissipation",
	});
}

export default Component;
