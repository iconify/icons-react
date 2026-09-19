import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1ns9bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="in1ns9bcp"/>`,
		"fallback": "heroicons:printer-solid",
	});
}

export default Component;
