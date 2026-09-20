import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smungrb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smungrb7c"/>`,
		"fallback": "mingcute:rainbow-line",
	});
}

export default Component;
