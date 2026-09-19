import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndt2mhb5w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndt2mhb5w"/>`,
		"fallback": "game-icons:raven",
	});
}

export default Component;
