import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx1qtac8g.css';
import '../../css/w/wkho5gbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx1qtac8g"/><path class="wkho5gbiz"/>`,
		"fallback": "stash:mailbox-empty-duotone",
	});
}

export default Component;
