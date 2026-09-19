import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnbi3ybrh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnbi3ybrh"/>`,
		"fallback": "game-icons:moldova",
	});
}

export default Component;
