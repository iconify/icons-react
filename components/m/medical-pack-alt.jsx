import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id5b2zbzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id5b2zbzl"/>`,
		"fallback": "game-icons:medical-pack-alt",
	});
}

export default Component;
