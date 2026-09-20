import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxzf5kbmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxzf5kbmj"/>`,
		"fallback": "mingcute:leaf-fill",
	});
}

export default Component;
