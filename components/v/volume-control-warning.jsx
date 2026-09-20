import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wjym82z8l.css';
import '../../css/f/fll0uqb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wjym82z8l"/><path class="fll0uqb6i"/></g>`,
		"fallback": "streamline-ultimate:volume-control-warning",
	});
}

export default Component;
