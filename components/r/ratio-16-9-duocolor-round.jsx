import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej9n68bqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej9n68bqm"/>`,
		"fallback": "coolicons:ratio-16-9-duocolor-round",
	});
}

export default Component;
