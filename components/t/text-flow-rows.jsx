import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3-3utc-n.css';
import '../../css/z/zojr2mbbw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k3-3utc-n"/><path class="zojr2mbbw"/></g>`,
		"fallback": "streamline-color:text-flow-rows",
	});
}

export default Component;
