import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqodi2buw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqodi2buw"/>`,
		"fallback": "game-icons:mighty-spanner",
	});
}

export default Component;
