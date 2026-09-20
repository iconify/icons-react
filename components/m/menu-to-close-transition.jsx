import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xro_uz.css';
import '../../css/d/d-xntmfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xro_uz"/>`,
		"fallback": "line-md:menu-to-close-transition",
	});
}

export default Component;
