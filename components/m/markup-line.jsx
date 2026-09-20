import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osmryt6ri.css';
import '../../css/n/nzqrsacsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osmryt6ri"/><path class="nzqrsacsf"/>`,
		"fallback": "mingcute:markup-line",
	});
}

export default Component;
