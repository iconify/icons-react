import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfw21bb3y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfw21bb3y"/>`,
		"fallback": "energy-icons:underfloor-heating-48",
	});
}

export default Component;
