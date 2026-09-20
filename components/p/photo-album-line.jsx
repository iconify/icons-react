import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5456z5rt.css';
import '../../css/v/v5gc3bcuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5456z5rt"/><path class="v5gc3bcuy"/>`,
		"fallback": "mingcute:photo-album-line",
	});
}

export default Component;
