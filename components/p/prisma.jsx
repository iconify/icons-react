import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4s6-81zn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4s6-81zn"/>`,
		"fallback": "material-icon-theme:prisma",
	});
}

export default Component;
