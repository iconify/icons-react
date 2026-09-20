import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gewhw0bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gewhw0bgk"/>`,
		"fallback": "mingcute:test-tube-line",
	});
}

export default Component;
