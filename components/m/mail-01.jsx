import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/rxrqbko2q.css';
import '../../css/s/si8melbls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="rxrqbko2q"/><path class="si8melbls"/></g>`,
		"fallback": "hugeicons:mail-01",
	});
}

export default Component;
