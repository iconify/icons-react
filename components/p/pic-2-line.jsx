import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbdsq-yur.css';
import '../../css/w/w22rijbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbdsq-yur"/><path class="w22rijbep"/>`,
		"fallback": "mingcute:pic-2-line",
	});
}

export default Component;
