import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaiyq5bvp.css';
import '../../css/a/a1r6rtrur.css';
import '../../css/l/lraqajimb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qaiyq5bvp"><path class="a1r6rtrur"/><path class="lraqajimb"/></g>`,
		"fallback": "catppuccin:ms-powerpoint",
	});
}

export default Component;
