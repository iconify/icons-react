import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p81p5o69s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p81p5o69s"/>`,
		"fallback": "selfhst:lore-epic-games",
	});
}

export default Component;
