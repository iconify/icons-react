import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/u-wsh989r.css';
import '../../css/o/ozd7kohpu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="u-wsh989r"/><path class="ozd7kohpu"/></g>`,
		"fallback": "teenyicons:nuxtjs-outline",
	});
}

export default Component;
