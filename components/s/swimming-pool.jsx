import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml4dr2hga.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml4dr2hga"/>`,
		"fallback": "icon-park-outline:swimming-pool",
	});
}

export default Component;
