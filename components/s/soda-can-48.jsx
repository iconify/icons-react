import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8div7b-m.css';
import '../../css/p/placboblb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8div7b-m"/><path class="placboblb"/>`,
		"fallback": "energy-icons:soda-can-48",
	});
}

export default Component;
