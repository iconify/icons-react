import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/q/q53134oub.css';
import '../../css/m/m9awzuz4m.css';
import '../../css/i/izz9u2a6d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="q53134oub"/><circle class="m9awzuz4m"/><path class="izz9u2a6d"/></g>`,
		"fallback": "icon-park-solid:pearl-of-the-orient",
	});
}

export default Component;
