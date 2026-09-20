import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubgk3rb-x.css';
import '../../css/k/kx15g1jff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubgk3rb-x"/><path clip-rule="evenodd" class="kx15g1jff"/>`,
		"fallback": "mingcute:ios-fill",
	});
}

export default Component;
