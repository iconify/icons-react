import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze82bcb9d.css';
import '../../css/g/g6yvkvbhb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze82bcb9d"/><path class="g6yvkvbhb"/>`,
		"fallback": "energy-icons:nickel-48",
	});
}

export default Component;
