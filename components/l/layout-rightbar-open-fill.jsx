import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rake5402i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rake5402i"/>`,
		"fallback": "mingcute:layout-rightbar-open-fill",
	});
}

export default Component;
