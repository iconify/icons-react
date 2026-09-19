import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9n9aw2xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c9n9aw2xv"/>`,
		"fallback": "iconamoon:number-3-fill",
	});
}

export default Component;
