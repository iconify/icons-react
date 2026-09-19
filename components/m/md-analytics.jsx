import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot4szdbar.css';
import '../../css/n/niefumugv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot4szdbar"/><path class="niefumugv"/>`,
		"fallback": "ion:md-analytics",
	});
}

export default Component;
