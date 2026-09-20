import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwb0gcbpy.css';
import '../../css/o/o02y6724p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwb0gcbpy"/><path class="o02y6724p"/>`,
		"fallback": "lets-icons:ticket-use-duotone-line",
	});
}

export default Component;
