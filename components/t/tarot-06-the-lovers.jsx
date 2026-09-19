import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aphd_b-zg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aphd_b-zg"/>`,
		"fallback": "game-icons:tarot-06-the-lovers",
	});
}

export default Component;
