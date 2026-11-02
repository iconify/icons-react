import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mihv603ga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mihv603ga"/>`,
		"fallback": "mingcute:layout-rightbar-close-line",
	});
}

export default Component;
