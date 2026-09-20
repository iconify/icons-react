import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xalkdwbjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xalkdwbjt"/>`,
		"fallback": "streamline-ultimate:soft-drinks-bottle-1-bold",
	});
}

export default Component;
