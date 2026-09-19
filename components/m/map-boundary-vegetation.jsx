import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5h-uebpt.css';
import '../../css/q/q74q21bgu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5h-uebpt"/><path class="q74q21bgu"/>`,
		"fallback": "carbon:map-boundary-vegetation",
	});
}

export default Component;
