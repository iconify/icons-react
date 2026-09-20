import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjxj44lwm.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjxj44lwm"/>`,
		"fallback": "material-icon-theme:mermaid",
	});
}

export default Component;
