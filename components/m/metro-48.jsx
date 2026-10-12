import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjes_2big.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjes_2big"/>`,
		"fallback": "energy-icons:metro-48",
	});
}

export default Component;
