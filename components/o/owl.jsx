import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/analhzb7y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="analhzb7y"/>`,
		"fallback": "game-icons:owl",
	});
}

export default Component;
