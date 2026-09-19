import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq_72vemr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq_72vemr"/>`,
		"fallback": "ion:md-cloud-circle",
	});
}

export default Component;
