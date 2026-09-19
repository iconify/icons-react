import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud59pdg3z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud59pdg3z"/>`,
		"fallback": "game-icons:poppy",
	});
}

export default Component;
