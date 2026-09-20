import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1j8y2p6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1j8y2p6q"/>`,
		"fallback": "keyline-icons:play-sharp-fill",
	});
}

export default Component;
