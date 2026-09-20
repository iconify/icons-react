import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0fl5qbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0fl5qbyv"/>`,
		"fallback": "mingcute:phone-incoming-line",
	});
}

export default Component;
