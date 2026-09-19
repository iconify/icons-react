import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nts4n-9sa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nts4n-9sa"/>`,
		"fallback": "iconamoon:player-next-bold",
	});
}

export default Component;
