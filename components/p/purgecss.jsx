import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy9pv4mjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy9pv4mjy"/>`,
		"fallback": "simple-icons:purgecss",
	});
}

export default Component;
