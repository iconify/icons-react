import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h222tpu7y.css';
import '../../css/n/noydw8btb.css';
import '../../css/l/l7vm4db0k.css';
import '../../css/c/cpjapdb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h222tpu7y"/><path class="noydw8btb"/><path class="l7vm4db0k"/><path class="cpjapdb7u"/></g>`,
		"fallback": "streamline-freehand-color:shop-like",
	});
}

export default Component;
