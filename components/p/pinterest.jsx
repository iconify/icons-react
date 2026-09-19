import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmswvl73a.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmswvl73a"/>`,
		"fallback": "zmdi:pinterest",
	});
}

export default Component;
