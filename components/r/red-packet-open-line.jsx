import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xainp7b4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xainp7b4f"/>`,
		"fallback": "mingcute:red-packet-open-line",
	});
}

export default Component;
