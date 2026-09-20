import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/u9mbdp5lw.css';
import '../../css/z/zt_l6p9nm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="u9mbdp5lw"/><path class="zt_l6p9nm"/></g>`,
		"fallback": "teenyicons:stop-circle-outline",
	});
}

export default Component;
