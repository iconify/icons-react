import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh__tacrr.css';
import '../../css/q/qhgqg5brt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh__tacrr"/><path class="qhgqg5brt"/>`,
		"fallback": "vaadin:toolbox",
	});
}

export default Component;
