import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl9xknbcd.css';
import '../../css/e/euugn8avj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wl9xknbcd"/><path clip-rule="evenodd" class="euugn8avj"/>`,
		"fallback": "mingcute:magic-hat-fill",
	});
}

export default Component;
