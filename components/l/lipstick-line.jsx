import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go02y2lxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go02y2lxc"/>`,
		"fallback": "mingcute:lipstick-line",
	});
}

export default Component;
