import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svs_3lbxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svs_3lbxl"/>`,
		"fallback": "mingcute:user-add-line",
	});
}

export default Component;
