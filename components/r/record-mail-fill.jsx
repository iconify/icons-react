import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orz21ab4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orz21ab4n"/>`,
		"fallback": "mingcute:record-mail-fill",
	});
}

export default Component;
