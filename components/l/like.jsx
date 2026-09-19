import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-3au3dcd.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-3au3dcd"/>`,
		"fallback": "foundation:like",
	});
}

export default Component;
