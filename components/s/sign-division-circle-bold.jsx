import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/s/s_24sns7n.css';
import '../../css/y/ys1gjwbls.css';
import '../../css/y/yt9q-fb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="s_24sns7n"/><path class="ys1gjwbls"/><path class="yt9q-fb4i"/></g>`,
		"fallback": "iconamoon:sign-division-circle-bold",
	});
}

export default Component;
