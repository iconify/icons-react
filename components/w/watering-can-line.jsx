import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz2anaczn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz2anaczn"/>`,
		"fallback": "mingcute:watering-can-line",
	});
}

export default Component;
