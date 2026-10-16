import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne-jowj6i.css';
import '../../css/t/ty8mqjb4w.css';
import '../../css/p/p-x0sqbzb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne-jowj6i"/><path class="ty8mqjb4w"/><path class="p-x0sqbzb"/>`,
		"fallback": "energy-icons:liquid-hydrogen-48-bold",
	});
}

export default Component;
