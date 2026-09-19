import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bgju2vbae.css';
import '../../css/h/hu6m7zbrv.css';
import '../../css/i/izz9u2a6d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="bgju2vbae"/><circle class="hu6m7zbrv"/><path class="izz9u2a6d"/></g>`,
		"fallback": "icon-park-outline:pearl-of-the-orient",
	});
}

export default Component;
