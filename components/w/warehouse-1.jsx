import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4t-j76yf.css';
import '../../css/f/fdzp5db9w.css';
import '../../css/h/hwrw65e8d.css';
import '../../css/d/dhxmejb3g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b4t-j76yf"/><path clip-rule="evenodd" class="fdzp5db9w"/><path class="hwrw65e8d"/><path class="dhxmejb3g"/></g>`,
		"fallback": "streamline-color:warehouse-1",
	});
}

export default Component;
