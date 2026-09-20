import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iacwmfb0y.css';
import '../../css/f/fb7w0qbrc.css';
import '../../css/r/rxs9aqbon.css';
import '../../css/b/brt5hcczb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iacwmfb0y"/><path class="fb7w0qbrc"/><path class="rxs9aqbon"/><path class="brt5hcczb"/></g>`,
		"fallback": "reicon:star-fall-duotone",
	});
}

export default Component;
