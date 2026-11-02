import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by4_c8chv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by4_c8chv"/>`,
		"fallback": "mingcute:mirror-fill",
	});
}

export default Component;
