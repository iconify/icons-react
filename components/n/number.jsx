import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhl7gxb9n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhl7gxb9n"/>`,
		"fallback": "oui:number",
	});
}

export default Component;
