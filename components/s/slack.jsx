import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dq684-b6u.css';
import '../../css/h/h8nb4lb9a.css';
import '../../css/z/z6odn989q.css';
import '../../css/o/ofmbieo8c.css';

const viewBox = {"width":2447.6,"height":2452.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="dq684-b6u"/><path class="h8nb4lb9a"/><path class="z6odn989q"/><path class="ofmbieo8c"/></g>`,
		"fallback": "thesvg-color:slack",
	});
}

export default Component;
