import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7ymvhzeq.css';
import '../../css/f/fxgii4b0e.css';
import '../../css/g/gh0u09crw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7ymvhzeq"/><path class="fxgii4b0e"/><path class="gh0u09crw"/>`,
		"fallback": "energy-icons:second-life-battery-48-bold",
	});
}

export default Component;
