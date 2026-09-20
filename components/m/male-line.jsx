import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qitrk6b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qitrk6b8t"/>`,
		"fallback": "mingcute:male-line",
	});
}

export default Component;
