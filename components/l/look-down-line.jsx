import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohgpddc_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohgpddc_f"/>`,
		"fallback": "mingcute:look-down-line",
	});
}

export default Component;
