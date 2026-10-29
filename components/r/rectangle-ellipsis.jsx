import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dlemphk8j.css';
import '../../css/i/i76dh14xw.css';
import '../../css/g/gj0zhrbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dlemphk8j"/><path class="i76dh14xw"/><path class="gj0zhrbiy"/></g>`,
		"fallback": "withicons-bauhaus:rectangle-ellipsis",
	});
}

export default Component;
