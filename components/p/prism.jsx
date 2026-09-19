import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzzsj1bbg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzzsj1bbg"/>`,
		"fallback": "game-icons:prism",
	});
}

export default Component;
