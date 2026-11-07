import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbilndayv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pbilndayv"/>`,
		"fallback": "solar:table-cells-split-outline",
	});
}

export default Component;
