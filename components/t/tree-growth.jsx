import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh3w2t_7u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh3w2t_7u"/>`,
		"fallback": "game-icons:tree-growth",
	});
}

export default Component;
