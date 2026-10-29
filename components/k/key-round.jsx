import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c9je85bmy.css';
import '../../css/i/i0x9plbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="c9je85bmy"/><path class="i0x9plbzu"/></g>`,
		"fallback": "withicons-bauhaus:key-round",
	});
}

export default Component;
