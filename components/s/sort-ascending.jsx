import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/audsjhv2z.css';
import '../../css/k/k6wji4t4d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="audsjhv2z"/><path class="k6wji4t4d"/>`,
		"fallback": "cil:sort-ascending",
	});
}

export default Component;
