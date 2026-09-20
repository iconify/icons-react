import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jdfsopbtm.css';
import '../../css/v/v5m2bbblg.css';
import '../../css/g/grqzasb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jdfsopbtm"/><path class="v5m2bbblg"/><path class="grqzasb1o"/></g>`,
		"fallback": "lets-icons:pined-fill",
	});
}

export default Component;
