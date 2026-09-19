import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uzrxt9cks.css';
import '../../css/v/vhig07y8s.css';
import '../../css/n/nbr52gbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uzrxt9cks"/><path class="vhig07y8s"/><path class="nbr52gbso"/></g>`,
		"fallback": "iconoir:map-pin-minus",
	});
}

export default Component;
