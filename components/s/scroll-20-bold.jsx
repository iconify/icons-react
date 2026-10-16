import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2gs_oovh.css';
import '../../css/r/rme-dq93w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2gs_oovh"/><path class="rme-dq93w"/>`,
		"fallback": "energy-icons:scroll-20-bold",
	});
}

export default Component;
