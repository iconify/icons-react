import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeo1bj5bw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeo1bj5bw"/>`,
		"fallback": "energy-icons:volume-high-48",
	});
}

export default Component;
