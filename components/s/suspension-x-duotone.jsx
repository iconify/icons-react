import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mab2rwb6t.css';
import '../../css/q/qv3mdbcpi.css';
import '../../css/q/q3s-uuc5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mab2rwb6t"/><path class="qv3mdbcpi"/><path clip-rule="evenodd" class="q3s-uuc5p"/></g>`,
		"fallback": "reicon:suspension-x-duotone",
	});
}

export default Component;
