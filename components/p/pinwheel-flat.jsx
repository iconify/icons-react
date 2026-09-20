import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9h7p90fh.css';
import '../../css/o/ocsylrb5y.css';
import '../../css/c/c72gcb-tq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z9h7p90fh"/><path clip-rule="evenodd" class="ocsylrb5y"/><path class="c72gcb-tq"/></g>`,
		"fallback": "streamline-plump-color:pinwheel-flat",
	});
}

export default Component;
