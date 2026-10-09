import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl3t2kb3x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl3t2kb3x"/>`,
		"fallback": "energy-icons:paw-48",
	});
}

export default Component;
