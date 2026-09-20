import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyndi6n7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pyndi6n7p"/>`,
		"fallback": "majesticons:presentation-chart",
	});
}

export default Component;
