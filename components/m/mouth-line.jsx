import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myw63ybnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myw63ybnv"/>`,
		"fallback": "mingcute:mouth-line",
	});
}

export default Component;
