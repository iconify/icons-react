import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-ojc6gmg.css';
import '../../css/l/ldfs6kdmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-ojc6gmg"/><path class="ldfs6kdmd"/>`,
		"fallback": "bxl:reddit",
	});
}

export default Component;
