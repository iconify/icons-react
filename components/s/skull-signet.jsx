import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q239hpb6s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q239hpb6s"/>`,
		"fallback": "game-icons:skull-signet",
	});
}

export default Component;
