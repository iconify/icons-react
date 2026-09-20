import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxybh2brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxybh2brj"/>`,
		"fallback": "tabler:logic-nand",
	});
}

export default Component;
