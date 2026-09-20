import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvz50ne4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvz50ne4y"/>`,
		"fallback": "mingcute:rest-area-fill",
	});
}

export default Component;
