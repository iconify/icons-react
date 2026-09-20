import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lekja6r0i.css';
import '../../css/m/mwjzc-b2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lekja6r0i"/><path class="mwjzc-b2t"/>`,
		"fallback": "streamline-freehand:ipod-player",
	});
}

export default Component;
