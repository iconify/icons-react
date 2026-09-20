import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm0lxtbtr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm0lxtbtr"/>`,
		"fallback": "selfhst:lore-epic-games-light",
	});
}

export default Component;
