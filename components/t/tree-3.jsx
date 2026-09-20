import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gw9zefftq.css';
import '../../css/t/t65lx7nsp.css';
import '../../css/k/k-vowsbai.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gw9zefftq"/><path class="t65lx7nsp"/><path class="k-vowsbai"/></g>`,
		"fallback": "streamline-color:tree-3",
	});
}

export default Component;
