import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/da0su4uhx.css';
import '../../css/t/tfi0d09kv.css';
import '../../css/s/s5bjb7baj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="da0su4uhx"/><path class="tfi0d09kv"/><path class="s5bjb7baj"/></g>`,
		"fallback": "lets-icons:tree",
	});
}

export default Component;
