import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e34m714wy.css';
import '../../css/w/wv2bapjvm.css';
import '../../css/s/si9n0oe7j.css';
import '../../css/g/gplvzs_py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e34m714wy"/><path class="wv2bapjvm"/><path class="si9n0oe7j"/><path class="gplvzs_py"/></g>`,
		"fallback": "streamline-ultimate-color:show-theater-mask-happy",
	});
}

export default Component;
