import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx6no8bsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx6no8bsj"/>`,
		"fallback": "streamline-ultimate:road-sign-turn-left-bold",
	});
}

export default Component;
