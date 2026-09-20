import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy-vytlwd.css';
import '../../css/h/hs0-l3b6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy-vytlwd"/><path class="hs0-l3b6r"/>`,
		"fallback": "stash:signin-alt-duotone",
	});
}

export default Component;
