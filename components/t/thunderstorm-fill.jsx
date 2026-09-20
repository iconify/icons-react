import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clp7z2bgf.css';
import '../../css/u/u7sq-5xjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clp7z2bgf"/><path class="u7sq-5xjs"/>`,
		"fallback": "mingcute:thunderstorm-fill",
	});
}

export default Component;
