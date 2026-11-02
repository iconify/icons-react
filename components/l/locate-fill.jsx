import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm3fv87sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm3fv87sl"/>`,
		"fallback": "mingcute:locate-fill",
	});
}

export default Component;
