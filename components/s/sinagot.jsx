import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjwe_m-4t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjwe_m-4t"/>`,
		"fallback": "game-icons:sinagot",
	});
}

export default Component;
