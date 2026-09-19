import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qieyddb2j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qieyddb2j"/>`,
		"fallback": "game-icons:stone-bust",
	});
}

export default Component;
