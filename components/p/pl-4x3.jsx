import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/damb695lr.css';
import '../../css/g/gwkoec6sp.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="damb695lr"/><path class="gwkoec6sp"/></g>`,
		"fallback": "flag:pl-4x3",
	});
}

export default Component;
