import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/u4lm23blg.css';
import '../../css/b/b0ef3ebmi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="u4lm23blg"/><path class="b0ef3ebmi"/></g>`,
		"fallback": "icon-park-outline:ranking-list",
	});
}

export default Component;
