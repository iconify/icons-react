import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn7qp0y5m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn7qp0y5m"/>`,
		"fallback": "icon-park-outline:repair",
	});
}

export default Component;
