import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-0vi6blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-0vi6blc"/>`,
		"fallback": "mingcute:look-up-line",
	});
}

export default Component;
