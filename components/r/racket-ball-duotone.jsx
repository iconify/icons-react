import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy0t6ac2f.css';
import '../../css/m/m3biyk1pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy0t6ac2f"/><path class="m3biyk1pf"/>`,
		"fallback": "stash:racket-ball-duotone",
	});
}

export default Component;
