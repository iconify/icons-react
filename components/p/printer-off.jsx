import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blo0asbrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="blo0asbrh"/>`,
		"fallback": "griddy-icons:printer-off",
	});
}

export default Component;
