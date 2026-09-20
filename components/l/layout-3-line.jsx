import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuge9sq2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuge9sq2v"/>`,
		"fallback": "mingcute:layout-3-line",
	});
}

export default Component;
