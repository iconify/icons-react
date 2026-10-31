import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2a-x9sbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2a-x9sbe"/>`,
		"fallback": "coolicons:table-cells-split-fill-round",
	});
}

export default Component;
