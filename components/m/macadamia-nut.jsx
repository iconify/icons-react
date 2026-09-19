import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_xj2ldud.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_xj2ldud"/>`,
		"fallback": "icon-park-outline:macadamia-nut",
	});
}

export default Component;
