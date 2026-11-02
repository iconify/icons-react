import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgh__w-ay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgh__w-ay"/>`,
		"fallback": "mingcute:live-photo-line",
	});
}

export default Component;
