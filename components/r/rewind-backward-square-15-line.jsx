import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7kyxil1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7kyxil1l"/>`,
		"fallback": "mingcute:rewind-backward-square-15-line",
	});
}

export default Component;
