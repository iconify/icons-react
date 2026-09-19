import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nso-0gb7x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nso-0gb7x"/>`,
		"fallback": "game-icons:juggling-seal",
	});
}

export default Component;
