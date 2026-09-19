import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqc0ucc7o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqc0ucc7o"/>`,
		"fallback": "game-icons:life-support",
	});
}

export default Component;
