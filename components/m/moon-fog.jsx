import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w_jlxsbpb.css';
import '../../css/l/lkx51sfzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w_jlxsbpb"/><path class="lkx51sfzj"/></g>`,
		"fallback": "reicon:moon-fog",
	});
}

export default Component;
