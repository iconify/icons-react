import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln0tm3pou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln0tm3pou"/>`,
		"fallback": "mingcute:school-line",
	});
}

export default Component;
