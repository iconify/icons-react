import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pew7ey2cm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pew7ey2cm"/>`,
		"fallback": "iconamoon:sign-division-circle-fill",
	});
}

export default Component;
