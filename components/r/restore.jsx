import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qthw5-fcy.css';
import '../../css/j/jk6_9_b0u.css';
import '../../css/r/r53d1sqvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="qthw5-fcy"/><path class="jk6_9_b0u"/><path class="r53d1sqvm"/></g>`,
		"fallback": "struq:restore",
	});
}

export default Component;
