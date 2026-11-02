import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyapg9piq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyapg9piq"/>`,
		"fallback": "mingcute:scan-2-line",
	});
}

export default Component;
