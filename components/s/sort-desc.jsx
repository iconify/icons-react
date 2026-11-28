import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr8__mnxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr8__mnxv"/>`,
		"fallback": "noviair-light:sort-desc",
	});
}

export default Component;
