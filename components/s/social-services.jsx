import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr_0ps4dh.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr_0ps4dh"/>`,
		"fallback": "medical-icon:social-services",
	});
}

export default Component;
