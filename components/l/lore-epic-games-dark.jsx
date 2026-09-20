import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihhxc7j7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihhxc7j7l"/>`,
		"fallback": "selfhst:lore-epic-games-dark",
	});
}

export default Component;
