import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vvoz8m13c.css';
import '../../css/c/cvy7uw8st.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary vvoz8m13c"/><path class="cvy7uw8st primary"/></g>`,
		"fallback": "iconaut:tag-off-duotone",
	});
}

export default Component;
