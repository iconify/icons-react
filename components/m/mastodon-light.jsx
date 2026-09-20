import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/n/n1o74_59r.css';
import '../../css/m/mv3rgabje.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="n1o74_59r"/><path class="mv3rgabje"/></g>`,
		"fallback": "skill-icons:mastodon-light",
	});
}

export default Component;
