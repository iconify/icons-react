import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooddoerrv.css';
import '../../css/t/td92ekb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooddoerrv"/><path class="td92ekb3h"/>`,
		"fallback": "mingcute:list-collapse-line",
	});
}

export default Component;
