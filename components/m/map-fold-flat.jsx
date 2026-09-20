import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_nnokbqn.css';
import '../../css/u/uvazr1b5a.css';
import '../../css/x/x2m2yac-o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o_nnokbqn"/><path class="uvazr1b5a"/><path class="x2m2yac-o"/></g>`,
		"fallback": "streamline-color:map-fold-flat",
	});
}

export default Component;
