import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka_vtlb8j.css';
import '../../css/c/ckzloge-a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka_vtlb8j"/><path class="ckzloge-a"/>`,
		"fallback": "cil:list-high-priority",
	});
}

export default Component;
