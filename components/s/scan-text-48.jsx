import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d54-v5bce.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d54-v5bce"/>`,
		"fallback": "energy-icons:scan-text-48",
	});
}

export default Component;
