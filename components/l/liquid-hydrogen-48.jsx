import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjsrzsb4b.css';
import '../../css/v/vt4p30p5y.css';
import '../../css/n/n3xkk3bbf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjsrzsb4b"/><path class="vt4p30p5y"/><path class="n3xkk3bbf"/>`,
		"fallback": "energy-icons:liquid-hydrogen-48",
	});
}

export default Component;
