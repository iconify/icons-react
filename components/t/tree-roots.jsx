import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv4k0-y3b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv4k0-y3b"/>`,
		"fallback": "game-icons:tree-roots",
	});
}

export default Component;
