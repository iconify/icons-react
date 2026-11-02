import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yihj--bpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yihj--bpn"/>`,
		"fallback": "mingcute:play-football-fill",
	});
}

export default Component;
