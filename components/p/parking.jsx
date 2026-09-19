import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/y/y9bmozbil.css';
import '../../css/r/r77yemz5v.css';
import '../../css/e/egd_hebsu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="y9bmozbil"/><path class="r77yemz5v"/><path class="egd_hebsu"/></g>`,
		"fallback": "icon-park-outline:parking",
	});
}

export default Component;
