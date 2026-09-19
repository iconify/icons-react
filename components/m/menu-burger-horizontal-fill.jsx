import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufvu6tbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ufvu6tbdy"/>`,
		"fallback": "iconamoon:menu-burger-horizontal-fill",
	});
}

export default Component;
