import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzl4o-zjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzl4o-zjc"/>`,
		"fallback": "mdi:speaker-play",
	});
}

export default Component;
