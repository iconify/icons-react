import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tsn7ane9g.css';
import '../../css/i/iofxr__0e.css';
import '../../css/o/orckdxgbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tsn7ane9g"/><path class="iofxr__0e"/><path class="orckdxgbg"/></g>`,
		"fallback": "solar:menu-dots-outline",
	});
}

export default Component;
