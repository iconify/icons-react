import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1h2e9unp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1h2e9unp"/>`,
		"fallback": "game-icons:nest-eggs",
	});
}

export default Component;
