import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng_19u0xj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng_19u0xj"/>`,
		"fallback": "energy-icons:parallelogram-48",
	});
}

export default Component;
