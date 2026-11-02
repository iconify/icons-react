import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry3ti9y4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry3ti9y4f"/>`,
		"fallback": "mingcute:markup-fill",
	});
}

export default Component;
