import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osmsw0baw.css';
import '../../css/u/u7-rv5cxi.css';
import '../../css/u/ujxr68ihv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osmsw0baw"/><path class="u7-rv5cxi"/><path class="ujxr68ihv"/>`,
		"fallback": "flat-color-icons:sim-card",
	});
}

export default Component;
