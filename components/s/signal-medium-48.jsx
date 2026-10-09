import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3dr6cpiw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3dr6cpiw"/>`,
		"fallback": "energy-icons:signal-medium-48",
	});
}

export default Component;
