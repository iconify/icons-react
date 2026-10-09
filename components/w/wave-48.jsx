import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voqy8c0sp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voqy8c0sp"/>`,
		"fallback": "energy-icons:wave-48",
	});
}

export default Component;
