import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sdrc_0b-w.css';
import '../../css/n/nl655j4aa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sdrc_0b-w"/><path class="nl655j4aa"/></g>`,
		"fallback": "reicon:lock-password-open-duotone",
	});
}

export default Component;
