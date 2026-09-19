import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6sb9-bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j6sb9-bbv"/>`,
		"fallback": "iconamoon:move-fill",
	});
}

export default Component;
