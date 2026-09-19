import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oscgc-brr.css';
import '../../css/r/rukfmib6m.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oscgc-brr"/><path class="rukfmib6m"/>`,
		"fallback": "ep:switch-filled",
	});
}

export default Component;
