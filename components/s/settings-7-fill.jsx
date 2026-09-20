import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmlje1b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hmlje1b6w"/>`,
		"fallback": "mingcute:settings-7-fill",
	});
}

export default Component;
