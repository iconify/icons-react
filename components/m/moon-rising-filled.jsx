import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6i3jx7ty.css';
import '../../css/c/c88l3cbkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6i3jx7ty"/><path class="c88l3cbkp"/>`,
		"fallback": "tdesign:moon-rising-filled",
	});
}

export default Component;
