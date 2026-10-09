import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l79qy9iaa.css';
import '../../css/b/buu0taccj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l79qy9iaa"/><path class="buu0taccj"/>`,
		"fallback": "energy-icons:switchgear-48-bold",
	});
}

export default Component;
