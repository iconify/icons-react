import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu2vshdfm.css';
import '../../css/c/ctjzoy1eo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu2vshdfm"/><path class="ctjzoy1eo"/>`,
		"fallback": "energy-icons:semi-detached-48",
	});
}

export default Component;
