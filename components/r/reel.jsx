import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/h/heunkubiq.css';
import '../../css/v/v1_9a1bkq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="heunkubiq"/><path class="v1_9a1bkq"/></g>`,
		"fallback": "icon-park-outline:reel",
	});
}

export default Component;
