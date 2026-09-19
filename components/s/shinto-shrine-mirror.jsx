import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r73fp3gax.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r73fp3gax"/>`,
		"fallback": "game-icons:shinto-shrine-mirror",
	});
}

export default Component;
