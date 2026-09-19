import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti3oqpcrj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti3oqpcrj"/>`,
		"fallback": "f7:tray",
	});
}

export default Component;
