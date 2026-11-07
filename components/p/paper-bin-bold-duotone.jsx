import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-wzpbwcp.css';
import '../../css/c/cgsdd0bmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-wzpbwcp"/><path clip-rule="evenodd" class="cgsdd0bmj"/>`,
		"fallback": "solar:paper-bin-bold-duotone",
	});
}

export default Component;
