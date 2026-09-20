import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6-iicbjm.css';
import '../../css/u/umq35-bit.css';
import '../../css/z/zjd3yb7vh.css';
import '../../css/y/y20wbpnci.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b6-iicbjm"/><path class="umq35-bit"/><path class="zjd3yb7vh"/><path class="y20wbpnci"/></g>`,
		"fallback": "streamline-color:smiley-throw-up",
	});
}

export default Component;
