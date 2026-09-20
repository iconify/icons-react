import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfrikpbvv.css';
import '../../css/e/etxysdbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfrikpbvv"/><path class="etxysdbfh"/>`,
		"fallback": "pixel:trash-alt",
	});
}

export default Component;
