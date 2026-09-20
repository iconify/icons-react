import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr7f1xbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr7f1xbfx"/>`,
		"fallback": "mdi:virtual-reality",
	});
}

export default Component;
