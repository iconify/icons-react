import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj13y4bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj13y4bfw"/>`,
		"fallback": "mingcute:progress-50-fill",
	});
}

export default Component;
