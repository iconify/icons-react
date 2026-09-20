import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0d4p95pm.css';

const viewBox = {"width":1411,"height":1557};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0d4p95pm"/>`,
		"fallback": "thesvg:ubs-etracs",
	});
}

export default Component;
