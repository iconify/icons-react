import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue6w-gb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue6w-gb9t"/>`,
		"fallback": "mingcute:signal-line",
	});
}

export default Component;
