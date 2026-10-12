import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsc05bbuw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsc05bbuw"/>`,
		"fallback": "garden:sparkle-stroke-20",
	});
}

export default Component;
