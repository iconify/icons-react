import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsveq9qwk.css';
import '../../css/j/jfh5rkbay.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsveq9qwk"/><path class="jfh5rkbay"/>`,
		"fallback": "energy-icons:pram-48-bold",
	});
}

export default Component;
