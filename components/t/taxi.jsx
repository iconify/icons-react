import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/c74powpze.css';
import '../../css/s/syt50b-8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="c74powpze"/><path class="syt50b-8h"/></g>`,
		"fallback": "hugeicons:taxi",
	});
}

export default Component;
