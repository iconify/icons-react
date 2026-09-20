import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p068o5acv.css';
import '../../css/s/sm2nqnaxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p068o5acv"/><path class="sm2nqnaxi"/>`,
		"fallback": "mingcute:pic-ai-line",
	});
}

export default Component;
