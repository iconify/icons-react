import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/evi1xebbn.css';
import '../../css/y/y6b_cttio.css';
import '../../css/a/aqasqsbwy.css';
import '../../css/k/k3_a_wb4n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="evi1xebbn"/><path class="y6b_cttio"/><path class="aqasqsbwy"/><path class="k3_a_wb4n"/></g>`,
		"fallback": "streamline-color:visible",
	});
}

export default Component;
