import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1y0m4n5i.css';
import '../../css/c/c1aplsb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="q1y0m4n5i"/><rect class="c1aplsb3n"/></g>`,
		"fallback": "iconamoon:player-stop-duotone",
	});
}

export default Component;
