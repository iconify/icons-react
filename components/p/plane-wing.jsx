import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo5ta_uie.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo5ta_uie"/>`,
		"fallback": "game-icons:plane-wing",
	});
}

export default Component;
