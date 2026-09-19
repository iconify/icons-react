import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de85xv_ov.css';

const viewBox = {"width":832,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de85xv_ov"/>`,
		"fallback": "whh:pinterest",
	});
}

export default Component;
