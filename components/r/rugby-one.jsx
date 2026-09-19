import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3dpzbtra.css';
import '../../css/e/etnnjd0_i.css';
import '../../css/u/u0oxmulca.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y3dpzbtra"><path class="etnnjd0_i"/><path class="u0oxmulca"/></g>`,
		"fallback": "icon-park-outline:rugby-one",
	});
}

export default Component;
