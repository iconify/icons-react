import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wje_sfb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wje_sfb2w"/>`,
		"fallback": "mingcute:layout-rightbar-close-fill",
	});
}

export default Component;
