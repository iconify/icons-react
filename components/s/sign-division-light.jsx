import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/a/ab15cybvf.css';
import '../../css/l/lkkvs_bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ab15cybvf"/><path class="lkkvs_bly"/></g>`,
		"fallback": "iconamoon:sign-division-light",
	});
}

export default Component;
