import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhg-idsjd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhg-idsjd"/>`,
		"fallback": "la:ns8",
	});
}

export default Component;
