import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es41gybou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es41gybou"/>`,
		"fallback": "cbi:rewe",
	});
}

export default Component;
