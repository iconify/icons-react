import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huue4xb4c.css';
import '../../css/o/o6fdclsme.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huue4xb4c"/><path class="o6fdclsme"/>`,
		"fallback": "ion:pie-chart",
	});
}

export default Component;
