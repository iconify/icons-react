import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm5up5pot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm5up5pot"/>`,
		"fallback": "mingcute:sleigh-fill",
	});
}

export default Component;
