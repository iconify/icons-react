import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6zufn6ep.css';
import '../../css/g/g3a36eczr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6zufn6ep"/><path class="g3a36eczr"/>`,
		"fallback": "energy-icons:voltage-high-48-bold",
	});
}

export default Component;
