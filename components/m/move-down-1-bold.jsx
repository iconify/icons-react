import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iiwrv8p2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iiwrv8p2r"/>`,
		"fallback": "streamline-ultimate:move-down-1-bold",
	});
}

export default Component;
