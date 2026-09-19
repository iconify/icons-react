import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojhmxp_8j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojhmxp_8j"/>`,
		"fallback": "fa7-brands:r-project",
	});
}

export default Component;
