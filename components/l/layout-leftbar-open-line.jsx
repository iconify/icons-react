import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c52fk4sax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c52fk4sax"/>`,
		"fallback": "mingcute:layout-leftbar-open-line",
	});
}

export default Component;
