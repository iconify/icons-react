import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fg9-f-b7v.css';
import '../../css/t/t-8oj-bac.css';
import '../../css/b/bpchwnbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fg9-f-b7v"/><path class="t-8oj-bac"/><path class="bpchwnbwt"/></g>`,
		"fallback": "iconamoon:shopping-card-duotone",
	});
}

export default Component;
