import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckxrjp7pe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckxrjp7pe"/>`,
		"fallback": "oui:nav-discover",
	});
}

export default Component;
