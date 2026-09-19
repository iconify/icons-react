import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv7xipbea.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv7xipbea"/>`,
		"fallback": "game-icons:tree-branch",
	});
}

export default Component;
