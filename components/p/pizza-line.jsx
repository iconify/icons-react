import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8nqnqjtu.css';
import '../../css/h/hgrdrccsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8nqnqjtu"/><path class="hgrdrccsx"/>`,
		"fallback": "mingcute:pizza-line",
	});
}

export default Component;
