import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr-pw-b8g.css';
import '../../css/s/s2urmqbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr-pw-b8g"/><path class="s2urmqbds"/>`,
		"fallback": "solar:laptop-2-bold-duotone",
	});
}

export default Component;
