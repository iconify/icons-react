import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi8o1qbbo.css';
import '../../css/o/o7xo-pl1v.css';
import '../../css/z/z-qwk0bfp.css';
import '../../css/p/phykisuce.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi8o1qbbo"/><path class="o7xo-pl1v"/><path class="z-qwk0bfp"/><path class="phykisuce"/>`,
		"fallback": "energy-icons:screen-rotate-48-bold",
	});
}

export default Component;
