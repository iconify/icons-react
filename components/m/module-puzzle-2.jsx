import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/r/rne34ow4t.css';
import '../../css/w/w9kwvxbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="rne34ow4t"/><path class="w9kwvxbml"/></g>`,
		"fallback": "streamline-sharp-color:module-puzzle-2",
	});
}

export default Component;
