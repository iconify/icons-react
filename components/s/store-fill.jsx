import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziuv23_3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziuv23_3x"/>`,
		"fallback": "mingcute:store-fill",
	});
}

export default Component;
