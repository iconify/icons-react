import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts6m84bus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ts6m84bus"/>`,
		"fallback": "mingcute:oil-fill",
	});
}

export default Component;
