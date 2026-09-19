import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z66tl_b8p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z66tl_b8p"/>`,
		"fallback": "game-icons:toad-teeth",
	});
}

export default Component;
