import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe56f6bjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe56f6bjj"/>`,
		"fallback": "fa-brands:redhat",
	});
}

export default Component;
