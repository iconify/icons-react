import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqnf4jb-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqnf4jb-t"/>`,
		"fallback": "game-icons:missile-swarm",
	});
}

export default Component;
