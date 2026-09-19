import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il6k9zb_g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il6k9zb_g"/>`,
		"fallback": "game-icons:snorkel",
	});
}

export default Component;
