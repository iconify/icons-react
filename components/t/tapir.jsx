import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2hyr4bdo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2hyr4bdo"/>`,
		"fallback": "game-icons:tapir",
	});
}

export default Component;
