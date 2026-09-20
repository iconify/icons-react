import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p42mq7fqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p42mq7fqq"/>`,
		"fallback": "mingcute:record-mail-line",
	});
}

export default Component;
