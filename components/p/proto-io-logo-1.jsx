import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/a/aeq5jactr.css';
import '../../css/r/rj_tibb3j.css';
import '../../css/j/j697l3uzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="aeq5jactr"/><path class="rj_tibb3j"/><path class="j697l3uzc"/></g>`,
		"fallback": "streamline-logos:proto-io-logo-1",
	});
}

export default Component;
