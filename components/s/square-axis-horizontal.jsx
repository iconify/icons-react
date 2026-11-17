import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqw3ozb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqw3ozb1x"/>`,
		"fallback": "lucide:square-axis-horizontal",
	});
}

export default Component;
