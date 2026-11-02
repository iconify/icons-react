import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utprw0bre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utprw0bre"/>`,
		"fallback": "mingcute:layout-bottom-open-fill",
	});
}

export default Component;
