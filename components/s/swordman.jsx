import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7nd9-vlf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7nd9-vlf"/>`,
		"fallback": "game-icons:swordman",
	});
}

export default Component;
