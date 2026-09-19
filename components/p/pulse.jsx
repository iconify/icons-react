import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3yw4b3zg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3yw4b3zg"/>`,
		"fallback": "game-icons:pulse",
	});
}

export default Component;
