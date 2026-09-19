import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je4z95b1p.css';
import '../../css/d/dxj4yybcj.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je4z95b1p"/><path class="dxj4yybcj"/>`,
		"fallback": "gis:poi-info-o",
	});
}

export default Component;
