import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0embdbpt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0embdbpt"/>`,
		"fallback": "icon-park-outline:multi-triangular-four",
	});
}

export default Component;
