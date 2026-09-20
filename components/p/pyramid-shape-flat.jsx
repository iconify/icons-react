import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qp3rj1bfn.css';
import '../../css/b/b6_4x8bwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qp3rj1bfn"/><path class="b6_4x8bwa"/></g>`,
		"fallback": "streamline-sharp-color:pyramid-shape-flat",
	});
}

export default Component;
