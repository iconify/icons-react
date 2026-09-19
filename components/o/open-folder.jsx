import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds166cc_f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds166cc_f"/>`,
		"fallback": "game-icons:open-folder",
	});
}

export default Component;
