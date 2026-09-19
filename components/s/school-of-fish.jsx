import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu8fkes9x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu8fkes9x"/>`,
		"fallback": "game-icons:school-of-fish",
	});
}

export default Component;
