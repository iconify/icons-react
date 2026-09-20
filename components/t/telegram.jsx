import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gphxlac4x.css';
import '../../css/k/k5rc8zisb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gphxlac4x"/><path class="k5rc8zisb"/>`,
		"fallback": "pixel:telegram",
	});
}

export default Component;
