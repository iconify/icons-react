import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp5eyfboc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp5eyfboc"/>`,
		"fallback": "game-icons:snatch",
	});
}

export default Component;
