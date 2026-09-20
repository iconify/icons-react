import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gn4rl1fxw.css';
import '../../css/g/gk04kqvbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="gn4rl1fxw"/><path class="gk04kqvbi"/></g>`,
		"fallback": "keyline-icons:scan-search-sharp-fill",
	});
}

export default Component;
