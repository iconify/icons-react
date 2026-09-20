import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqsb1e8mr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqsb1e8mr"/>`,
		"fallback": "uit:vk-alt",
	});
}

export default Component;
