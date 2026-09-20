import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uerc2ubyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uerc2ubyz"/>`,
		"fallback": "pixel:viewblocks",
	});
}

export default Component;
