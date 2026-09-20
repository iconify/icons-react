import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av0sy3bmo.css';
import '../../css/w/wli-clb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av0sy3bmo"/><path class="wli-clb7a"/>`,
		"fallback": "mingcute:look-down-line",
	});
}

export default Component;
