import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/prfnqtbeh.css';
import '../../css/m/mzxs71pdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="prfnqtbeh"/><path class="mzxs71pdy"/></g>`,
		"fallback": "reicon:watch-duotone",
	});
}

export default Component;
