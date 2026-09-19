import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq2drpblx.css';
import '../../css/g/gi07l0tvf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq2drpblx"/><path class="gi07l0tvf"/>`,
		"fallback": "gis:triangle-map",
	});
}

export default Component;
