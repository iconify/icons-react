import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc27174-p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc27174-p"/>`,
		"fallback": "game-icons:level-crossing",
	});
}

export default Component;
