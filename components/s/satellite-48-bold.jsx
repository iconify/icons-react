import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia6zlxdrk.css';
import '../../css/w/wp13yub7p.css';
import '../../css/c/cl2lae65c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia6zlxdrk"/><path class="wp13yub7p"/><path class="cl2lae65c"/>`,
		"fallback": "energy-icons:satellite-48-bold",
	});
}

export default Component;
