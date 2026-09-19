import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/neqhlfbut.css';
import '../../css/z/z9youcaqg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="neqhlfbut"/><path class="z9youcaqg"/></g>`,
		"fallback": "icon-park-outline:proportional-scaling",
	});
}

export default Component;
