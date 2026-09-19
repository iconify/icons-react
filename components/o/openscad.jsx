import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy8314brb.css';

const viewBox = {"width":641,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy8314brb"/>`,
		"fallback": "file-icons:openscad",
	});
}

export default Component;
